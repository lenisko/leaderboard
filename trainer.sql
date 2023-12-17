CREATE TABLE IF NOT EXISTS `player`
(
    `name`                 varchar(20)          NOT NULL,
    `last_seen`            int(10)              NOT NULL,
    `friendship_id`        varchar(100)         DEFAULT NULL,
    `friend_code`          varchar(12)          DEFAULT NULL,
    `team`                 tinyint(1) UNSIGNED  DEFAULT NULL,
    `level`                tinyint(2) UNSIGNED  DEFAULT NULL,
    `xp`                   bigint(9) UNSIGNED   DEFAULT NULL,
    `battles_won`          int(6) UNSIGNED      DEFAULT NULL,
    `km_walked`            float UNSIGNED       DEFAULT NULL,
    `caught_pokemon`       int(6) UNSIGNED      DEFAULT NULL,
    `gbl_rank`             tinyint(2) UNSIGNED  DEFAULT NULL,
    `gbl_rating`           smallint(4) UNSIGNED DEFAULT NULL,
    `event_badges`         varchar(500)         DEFAULT NULL,
    `stops_spun`           int(6) UNSIGNED      DEFAULT NULL,
    `evolved`              int(6) UNSIGNED      DEFAULT NULL,
    `hatched`              int(6) UNSIGNED      DEFAULT NULL,
    `quests`               int(6) UNSIGNED      DEFAULT NULL,
    `trades`               int(6) UNSIGNED      DEFAULT NULL,
    `photobombs`           int(6) UNSIGNED      DEFAULT NULL,
    `purified`             int(6) UNSIGNED      DEFAULT NULL,
    `grunts_defeated`      int(6) UNSIGNED      DEFAULT NULL,
    `gym_battles_won`      int(6) UNSIGNED      DEFAULT NULL,
    `normal_raids_won`     int(6) UNSIGNED      DEFAULT NULL,
    `legendary_raids_won`  int(6) UNSIGNED      DEFAULT NULL,
    `trainings_won`        int(6) UNSIGNED      DEFAULT NULL,
    `berries_fed`          int(6) UNSIGNED      DEFAULT NULL,
    `hours_defended`       int(6) UNSIGNED      DEFAULT NULL,
    `best_friends`         int(6) UNSIGNED      DEFAULT NULL,
    `best_buddies`         int(6) UNSIGNED      DEFAULT NULL,
    `giovanni_defeated`    smallint(3) UNSIGNED DEFAULT NULL,
    `mega_evos`            int(6) UNSIGNED      DEFAULT NULL,
    `collections_done`     smallint(3) UNSIGNED DEFAULT NULL,
    `vivillon`             tinyint(2) UNSIGNED  DEFAULT NULL,
    `showcase_max_size_first_place` int(6) UNSIGNED  DEFAULT NULL,
    `unique_stops_spun`    int(6) UNSIGNED      DEFAULT NULL,
    `unique_mega_evos`     int(3) UNSIGNED      DEFAULT NULL,
    `unique_raid_bosses`   int(4) UNSIGNED      DEFAULT NULL,
    `unique_unown`         tinyint(2) UNSIGNED  DEFAULT NULL,
    `seven_day_streaks`    int(6) UNSIGNED      DEFAULT NULL,
    `trade_km`             bigint(8) UNSIGNED   DEFAULT NULL,
    `raids_with_friends`   int(6) UNSIGNED      DEFAULT NULL,
    `caught_at_lure`       int(6) UNSIGNED      DEFAULT NULL,
    `wayfarer_agreements`  int(6) UNSIGNED      DEFAULT NULL,
    `trainers_referred`    int(6) UNSIGNED      DEFAULT NULL,
    `raid_achievements`    int(6) UNSIGNED      DEFAULT NULL,
    `xl_karps`             int(6) UNSIGNED      DEFAULT NULL,
    `xs_rats`              int(6) UNSIGNED      DEFAULT NULL,
    `tiny_pokemon_caught`  int(6) UNSIGNED      DEFAULT NULL,
    `jumbo_pokemon_caught` int(6) UNSIGNED      DEFAULT NULL,
    `pikachu_caught`       int(6) UNSIGNED      DEFAULT NULL,
    `league_great_won`     int(6) UNSIGNED      DEFAULT NULL,
    `league_ultra_won`     int(6) UNSIGNED      DEFAULT NULL,
    `league_master_won`    int(6) UNSIGNED      DEFAULT NULL,
    `dex_gen1`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen2`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen3`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen4`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen5`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen6`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen7`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen8`             tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen8a`            tinyint(3) UNSIGNED  DEFAULT NULL,
    `dex_gen9`            tinyint(3) UNSIGNED  DEFAULT NULL,
    `caught_normal`        int(6) UNSIGNED      DEFAULT NULL,
    `caught_fighting`      int(6) UNSIGNED      DEFAULT NULL,
    `caught_flying`        int(6) UNSIGNED      DEFAULT NULL,
    `caught_poison`        int(6) UNSIGNED      DEFAULT NULL,
    `caught_ground`        int(6) UNSIGNED      DEFAULT NULL,
    `caught_rock`          int(6) UNSIGNED      DEFAULT NULL,
    `caught_bug`           int(6) UNSIGNED      DEFAULT NULL,
    `caught_ghost`         int(6) UNSIGNED      DEFAULT NULL,
    `caught_steel`         int(6) UNSIGNED      DEFAULT NULL,
    `caught_fire`          int(6) UNSIGNED      DEFAULT NULL,
    `caught_water`         int(6) UNSIGNED      DEFAULT NULL,
    `caught_grass`         int(6) UNSIGNED      DEFAULT NULL,
    `caught_electric`      int(6) UNSIGNED      DEFAULT NULL,
    `caught_psychic`       int(6) UNSIGNED      DEFAULT NULL,
    `caught_ice`           int(6) UNSIGNED      DEFAULT NULL,
    `caught_dragon`        int(6) UNSIGNED      DEFAULT NULL,
    `caught_dark`          int(6) UNSIGNED      DEFAULT NULL,
    `caught_fairy`         int(6) UNSIGNED      DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `player`
    ADD PRIMARY KEY (`name`),
    ADD UNIQUE KEY `friend_code` (`friend_code`),
    ADD KEY `friendship_id` (`friendship_id`) USING BTREE;
COMMIT;
