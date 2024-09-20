import * as migration_20240919_223715_init from "./20240919_223715_init";
import * as migration_20240919_224116_faq_test_added from "./20240919_224116_faq_test_added";
import * as migration_20240919_224625_faq_test_removed from "./20240919_224625_faq_test_removed";
import * as migration_20240920_102739_venue_slider from "./20240920_102739_venue_slider";

export const migrations = [
  {
    up: migration_20240919_223715_init.up,
    down: migration_20240919_223715_init.down,
    name: "20240919_223715_init",
  },
  {
    up: migration_20240919_224116_faq_test_added.up,
    down: migration_20240919_224116_faq_test_added.down,
    name: "20240919_224116_faq_test_added",
  },
  {
    up: migration_20240919_224625_faq_test_removed.up,
    down: migration_20240919_224625_faq_test_removed.down,
    name: "20240919_224625_faq_test_removed",
  },
  {
    up: migration_20240920_102739_venue_slider.up,
    down: migration_20240920_102739_venue_slider.down,
    name: "20240920_102739_venue_slider",
  },
];
