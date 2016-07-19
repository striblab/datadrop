import Geo from '../geo';

export default class RepeatGroup {

    constructor (key, repeat_dist, max_repeat_dist) {
        this.key = key;
        this.repeat_dist = repeat_dist;
        this.repeat_dist_sq = this.repeat_dist * this.repeat_dist;
        this.max_repeat_dist_sq = max_repeat_dist * max_repeat_dist;
        this.one_per_group = (this.repeat_dist_sq >= this.max_repeat_dist_sq) ? true : false;
        this.positions = [];
    }

    // Check an object to see if it's a repeat in this group
    check (obj) {
        // If only one object allowed per group, shortcut distance logic
        if (this.one_per_group) {
            if (this.positions.length > 0) {
                // reported distance maxes out at threshold in this case
                // (not true dist value since we skipped calculating it)
                return {
                    dist_sq: this.max_repeat_dist_sq,
                    repeat_dist_sq: this.repeat_dist_sq,
                    one_per_group: this.one_per_group
                };
            }
            return; // no object for this group yet
        }

        // Check distance from new object to objects already in group
        let p1 = obj.position;
        for (let i=0; i < this.positions.length; i++) {
            let p2 = this.positions[i];
            let dx = p1[0] - p2[0];
            let dy = p1[1] - p2[1];
            let dist_sq = dx * dx + dy * dy;

            // Found an existing object within allowed distance
            if (dist_sq < this.repeat_dist_sq) {
                return {
                    dist_sq,
                    repeat_dist_sq: this.repeat_dist_sq
                };
            }
        }
    }

    // Add object to this group
    add (obj) {
        // only store object's position, to save space / prevent unnecessary references
        if (obj && obj.position) {
            this.positions.push(obj.position);
        }
    }

    // Static methods are used to manage repeat groups, within and across tiles

    // Reset all groups for this tile
    static clear (tile) {
        this.groups[tile] = {};
    }

    // Check an object to see if it's a repeat within its designated group
    static check (obj, layout, tile) {
        if (layout.repeat_distance && this.groups[tile][layout.repeat_group]) {
            return this.groups[tile][layout.repeat_group].check(obj);
        }
    }

    // Add an object to its designated group
    static add (obj, layout, tile) {
        if (layout.repeat_distance) {
            if (this.groups[tile][layout.repeat_group] == null) {
                this.groups[tile][layout.repeat_group] = new RepeatGroup(
                    layout.repeat_group,
                    layout.repeat_distance,
                    RepeatGroup.max_repeat_dist
                );
            }
            this.groups[tile][layout.repeat_group].add(obj);
        }
    }

}

// Current set of repeat groups, grouped and keyed by tile
RepeatGroup.groups = {};

// Max repeat dist: for groups with a repeat dist beyond this threshold, only one label
// will be allowed per group, e.g. set to tile size for one-label-per-tile
RepeatGroup.max_repeat_dist = Geo.tile_scale;
