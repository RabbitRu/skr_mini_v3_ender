module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    min_version: "2.1.4",
    meta: {
        stable_name: "skr_mini_v3-{{marlin_version}}-{{uid}}",
        nightly_name: "skr_mini_v3-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/BigTreeTech SKR Mini E3 3.0/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
        ],
        disable: []
    }
};
