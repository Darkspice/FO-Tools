
/*
 * Defines
 * \Server\scripts\worldmap.fos
 * \Server\scripts\_maps.fos
 * \Server\scripts\_vars.fos
 * \Server\scripts\_defines.fos
 *
 * Схема преобразования:
 * ^#define (.+?)\s+\( (\d{1,4}) \)
 * let \1 = \2;
 */

const ST_LEVEL = 77;
const SK_OUTDOORSMAN = 95;
const ST_TECHPROG = 5;

const LOCATION_Den = 1;
const LOCATION_Klamath = 2;
const LOCATION_Modoc = 3;
const LOCATION_VaultCity = 4;
const LOCATION_Gecko = 5;
const LOCATION_BrokenHills = 6;
const LOCATION_NewReno = 7;
const LOCATION_Sierra = 8;
const LOCATION_Vault15 = 9;
const LOCATION_NCR = 10;
const LOCATION_Cathedral = 11;
const LOCATION_MilitaryBase = 12;
const LOCATION_Redding = 13;
const LOCATION_SanFrancisco = 14;
const LOCATION_Navarro = 15;
const LOCATION_Arroyo = 16;
const LOCATION_PrimalTribe = 17;
const LOCATION_Rangers = 18;
const LOCATION_Vault13 = 19;
const LOCATION_BarterGround = 22;
const LOCATION_Atoll = 23;
const LOCATION_Raiders = 24;
const LOCATION_Replication1 = 40;
const LOCATION_Replication2 = 41;
const LOCATION_Replication3 = 42;
const LOCATION_Replication4 = 43;
const LOCATION_ReplicationHell = 44;
const LOCATION_GeckCity = 45;
const LOCATION_Dryfield = 47;

let specialNames = {
  51: 'свалка токсичных отходов',
  52: 'разбившийся вертиберд',
  56: 'тарелка',
  57: 'сообщество, живущее вдали от всех',
  58: 'одинокая собака',
  60: 'останки белого кита',
  61: 'каменная голова',
  62: 'неизвестная армия',
  63: 'странная шахта',
  64: 'человек, живущий в одиночестве',
  65: 'толстый человек',
  66: 'хранитель моста',
  67: 'заброшенная лаборатория',
  69: 'заброшенный аванпост Рыцарей Пустоши',
  70: 'какой-то военный склад',
  71: 'развалины дома',
  72: 'пещера',
  79: 'подозрительный грузовик',
  80: 'заброшенное место 1',
  81: 'заброшенное место 2',
  83: 'место встречи караванов 1',
  110: 'место встречи караванов 2',
  116: 'место встречи караванов 3',
};

let questsName = {
  82: 'секретное логово супермутантов',
  84: 'палатка наркодилеров, о которой говорила Нэнси по радио',
  85: 'караван Братства Стали и Анклав',
  86: 'караван Братства Стали и Мутанты',
  87: 'остатки каравана Даппо',
}


const LOCATION_SpecialFirstSpecial = 50;    // Todo
const LOCATION_SpecialToxicEncounter = 51; // свалка токсичных отходов
const LOCATION_SpecialShuttleEncounter = 52; // разбившийся вертиберд
const LOCATION_SpecialBunkerBoS = 53;    // Todo
const LOCATION_SpecialTruckNukaCola = 54;    // Todo
const LOCATION_SpecialGuardianEncounter = 55; // Todo
const LOCATION_SpecialUfo = 56;    // тарелка
const LOCATION_SpecialCafeEncounter = 57; // сообщество, живущее вдали от всех
const LOCATION_SpecialPariahsEncounter = 58; // странная одинокая собака
const LOCATION_SpecialMadBrahminEncounter = 59;
const LOCATION_SpecialWhaleEncounter = 60; // останки белого кита
const LOCATION_SpecialHeadEncounter = 61; // некий идол в виде каменной головы
const LOCATION_SpecialHolyEncounter1 = 62; // дом в лесу и солдаты неизвестной армии
const LOCATION_SpecialHolyEncounter2 = 63; // странная шахта
const LOCATION_SpecialWoodsmanEncounter = 64; // человек, живущий в одиночестве
const LOCATION_SpecialUnwashedEncounter = 65; // какие-то отморозки, гоняющие толстого человека
const LOCATION_SpecialBridgeEncounter = 66; // хранитель моста
const LOCATION_SpecialTeleportEncounter = 67; // заброшенная лаборатория
const LOCATION_SpecialWastelandChildren = 68;
const LOCATION_SpecialKotW = 69; // заброшенный аванпост Рыцарей Пустоши
const LOCATION_SpecialSoldierHolo = 70; // какой-то военный склад
const LOCATION_SpecialTrapperHolo = 71; // развалины дома
const LOCATION_SpecialDollHolo = 72; // пещера
const LOCATION_SpecialZergEncounter = 73;
const LOCATION_SpecialDoughnutsWarehouse = 74;
const LOCATION_SpecialAtomChurch = 75;
const LOCATION_SpecialBaxChurch = 76;
const LOCATION_SpecialAndroid = 77;
const LOCATION_SpecialTim = 78;
const LOCATION_SpecialHamstersEncounter = 79; // подозрительный грузовик
const LOCATION_Lost_Town = 80; // заброшенное место 1
const LOCATION_Lost_Town2 = 81; // заброшенное место 2

const LOCATION_Quest_VCity_Recon_Cave = 82; // секретное логово супермутантов
const LOCATION_Karavan = 83; // место встречи караванов
const LOCATION_Quest_Sid_And_Nancy = 84; // палатка наркодилеров, о которой говорила Нэнси по радио
const LOCATION_Quest_V15_Enclave = 85; // караван Братства Стали и Анклав
const LOCATION_Quest_V15_Mut = 86; // караван Братства Стали и Мутанты
const LOCATION_Quest_Dappo_Lost_Caravan = 87; // остатки каравана Даппо

const LOCATION_DesertEncounter1 = 101;
const LOCATION_DesertEncounter2 = 102;
const LOCATION_DesertEncounter3 = 103;
const LOCATION_DesertEncounter4 = 104;
const LOCATION_DesertEncounter5 = 105;
const LOCATION_DesertEncounter6 = 106;
const LOCATION_DesertEncounter7 = 107;
const LOCATION_DesertEncounter8 = 108;
const LOCATION_DesertEncounter9 = 109;
const LOCATION_DesertEncounter10 = 110;
const LOCATION_DesertEncounter11 = 111;
const LOCATION_DesertEncounter12 = 112;
const LOCATION_DesertEncounter13 = 113;
const LOCATION_DesertEncounter14 = 114;
const LOCATION_DesertEncounter15 = 115;
const LOCATION_DesertEncounter16 = 116;

const LOCATION_MountainEncounter1 = 121;
const LOCATION_MountainEncounter2 = 122;
const LOCATION_MountainEncounter3 = 123;
const LOCATION_MountainEncounter4 = 124;
const LOCATION_MountainEncounter5 = 125;
const LOCATION_MountainEncounter6 = 126;
const LOCATION_MountainEncounter7 = 127;

const LOCATION_CavernEncounter0 = 140;
const LOCATION_CavernEncounter1 = 141;
const LOCATION_CavernEncounter2 = 142;
const LOCATION_CavernEncounter3 = 143;
const LOCATION_CavernEncounter4 = 144;
const LOCATION_CavernEncounter5 = 145;

const LOCATION_CityEncounter1 = 161;
const LOCATION_CityEncounter2 = 162;
const LOCATION_CityEncounter3 = 163;
const LOCATION_CityEncounter4 = 164;
const LOCATION_CityEncounter5 = 165;
const LOCATION_CityEncounter6 = 166;
const LOCATION_CityEncounter7 = 167;
const LOCATION_CityEncounter8 = 168;

const LOCATION_CoastEncounter1 = 181;
const LOCATION_CoastEncounter2 = 182;
const LOCATION_CoastEncounter3 = 183;
const LOCATION_CoastEncounter4 = 184;
const LOCATION_CoastEncounter5 = 185;
const LOCATION_CoastEncounter6 = 186;
const LOCATION_CoastEncounter7 = 187;
const LOCATION_CoastEncounter8 = 188;
const LOCATION_CoastEncounter9 = 189;
const LOCATION_CoastEncounter10 = 190;
const LOCATION_CoastEncounter11 = 191;

const LOCATION_OceanEncounter1 = 193;
const LOCATION_OceanEncounter2 = 194;
const LOCATION_OceanEncounter3 = 195;
const LOCATION_OceanRaft = 196;
const LOCATION_OceanTrader = 197;

const LOCATION_Cave = 198;

const LOCATION_DesertEncounter1_v = 199;
const LOCATION_DesertEncounter2_v = 200;
const LOCATION_DesertEncounter3_v = 201;
const LOCATION_DesertEncounter4_v = 202;
const LOCATION_DesertEncounter5_v = 203;
const LOCATION_DesertEncounter6_v = 204;
const LOCATION_DesertEncounter7_v = 205;
const LOCATION_DesertEncounter8_v = 206;
const LOCATION_DesertEncounter9_v = 207;
const LOCATION_DesertEncounter10_v = 208;
const LOCATION_DesertEncounter11_v = 209;
const LOCATION_DesertEncounter12_v = 210;
const LOCATION_DesertEncounter13_v = 211;
const LOCATION_DesertEncounter14_v = 212;
const LOCATION_DesertEncounter15_v = 213;
const LOCATION_DesertEncounter16_v = 214;

// Переменные спец энок
const LVAR_special_encounter_bridge = 0; //Хранитель моста
const LVAR_special_encounter_head = 0; //Голова
const LVAR_special_encounter_hamster = 0; //Грузовик
const LVAR_special_encounter_whale = 0; // Кит
const LVAR_special_encounter_kotw = 0; //Котва
const GVAR_holy_global = 0;
const GVAR_lost_town_v = 0;
const GVAR_raiders_dead = 0;
const GVAR_ncr_siege_camps_num = 0;
const GVAR_sf_invasion_status = 0;
const LVAR_special_encounter_holy1 = 0;
const LVAR_special_encounter_holy2 = 0;
const LVAR_special_encounter_unwashed = 0;
const LVAR_special_trapper_holo = 0;
const LVAR_special_doll_holo = 0;
const LVAR_special_encounter_woodsman = 0;
const LVAR_vc_guard_rank = 0;
const LVAR_special_encounter_shuttle = 0;
const LVAR_special_encounter_toxic = 0;
const LVAR_special_encounter_teleport = 0;
const LVAR_hell_reactor_dclaws = 0;
const LVAR_special_soldier_holo = 0;
const LVAR_gecko_find_woody = 0;
const LVAR_special_encounter_ufo = 0;
const LVAR_q_bh_super_new_technology = 0;
const LVAR_bh_dead_saboteurs_counter = 0;
const LVAR_q_sf_slim_sidnancy = 0;
const LVAR_q_ncr_hate_patrol = 0;
const LVAR_q_enclave_patrol = 0;
const LVAR_q_ncr_caravan = 0;
const LVAR_ncr_dappo_lost_c_status = 0;

const TABLE_DstN = 0;
const TABLE_DstS = 1;
const TABLE_MtnN = 2;
const TABLE_MtnS = 3;
const TABLE_Vault = 4;
const TABLE_Coast = 5;
const TABLE_Arro_M = 6;
const TABLE_Arro_D = 7;
const TABLE_Arro_O = 8;
const TABLE_Arrok_D = 9;
const TABLE_Arrok_M = 10;
const TABLE_Kla_D = 11;
const TABLE_Kla_M = 12;
const TABLE_Klad_D = 13;
const TABLE_DMRV_D = 14;
const TABLE_DMRV_M = 15;
const TABLE_Den_D = 16;
const TABLE_Den_M = 17;
const TABLE_Band_M = 18;
const TABLE_Mod_M = 19;
const TABLE_DVMV_M = 20;
const TABLE_DVMV_D = 21;
const TABLE_Wild1_M = 22;
const TABLE_Wild1_D = 23;
const TABLE_Wild2_D = 24;
const TABLE_Wild2_M = 25;
const TABLE_VPat_M = 26;
const TABLE_VPat_D = 27;
const TABLE_Geck_M = 28;
const TABLE_Geck_D = 29;
const TABLE_Fish_O = 30;
const TABLE_Prim_D = 31;
const TABLE_Prim_M = 32;
const TABLE_DNRV_D = 33;
const TABLE_DNRV_M = 34;
const TABLE_Red_D = 35;
const TABLE_Red_M = 36;
const TABLE_Wild3_M = 37;
const TABLE_RDRC_M = 38;
const TABLE_RDRC_D = 39;
const TABLE_Raid_M = 40;
const TABLE_Raid_D = 41;
const TABLE_Nav_D = 42;
const TABLE_Nav_M = 43;
const TABLE_Nav_O = 44;
const TABLE_EPA_D = 45;
const TABLE_EPA_M = 46;
const TABLE_EPA_C = 47;
const TABLE_Wild4_D = 48;
const TABLE_Wild4_M = 49;
const TABLE_Wild4_O = 50;
const TABLE_SRNRRN_D = 51;
const TABLE_SRNRRN_M = 52;
const TABLE_New_D = 53;
const TABLE_New_M = 54;
const TABLE_New_C = 55;
const TABLE_Brok_D = 56;
const TABLE_Brok_M = 57;
const TABLE_Fran_O = 58;
const TABLE_Fran_M = 59;
const TABLE_Fran_C = 60;
const TABLE_Fran_D = 61;
const TABLE_Fran2_D = 62;
const TABLE_Fran2_C = 63;
const TABLE_Wild5_D = 64;
const TABLE_Wild5_M = 65;
const TABLE_NRNR_D = 66;
const TABLE_NRNR_M = 67;
const TABLE_Wild6_M = 68;
const TABLE_Wild6_D = 69;
const TABLE_VNNB_D = 70;
const TABLE_VNNB_M = 71;
const TABLE_NCR_M = 72;
const TABLE_NCR_D = 73;
const TABLE_V15_M = 74;
const TABLE_V15_D = 75;
const TABLE_Ocean1_O = 76;
const TABLE_Ocean2_O = 77;
const TABLE_HELL_M = 78;
const TABLE_VAULT_A = 79;
const TABLE_MAX = 80;

// const TERRAIN_Desert = 0;
// const TERRAIN_Mountain = 1;
// const TERRAIN_City = 2;
// const TERRAIN_Coast = 3;
// const TERRAIN_Water = 4;
const TERRAIN_Desert = 'Пустыня';
const TERRAIN_Mountain = 'Горы';
const TERRAIN_City = 'Развалины города';
const TERRAIN_Coast = 'Берег';
const TERRAIN_Water = 'Вода';

const CHANCE_Forced = 100; // This shouldn't change
const CHANCE_Frequent = 38;  // Was 9/3d6
const CHANCE_Common = 22;  // Was 8/3d6
const CHANCE_Uncommon = 12;  // Was 6/3d6
const CHANCE_Rare = 4;   // Was 5/3d6
const CHANCE_None = 0;   // This shouldn't change

let groupNames = {
  '-1': 'Игрок',
  0: 'банда рейдеров',
  1: 'стайка рад-скорпионов',
  2: 'большие крысомутанты',
  3: 'группа торговцев',
  4: 'путник',
  5: '',
  6: 'группа ящеров',
  7: 'кучка кротов грызли',
  8: '',
  9: '',
  10: '',
  11: 'несколько грызунов',
  12: 'небольшая стая крысо-кабанов',
  13: 'маленькая группка рад-скорпионов',
  14: 'группа серебряных ящеров',
  15: 'несколько хищных цветков',
  16: 'отряд охотников',
  17: 'отряд дикарей',
  18: 'стадо канибалов',
  19: 'несколько изгоев',
  20: 'несколько святых людей',
  21: 'банда кочевников',
  22: 'группа кротов-гризли',
  23: 'немного ящеров',
  24: 'отряд трапперов',
  25: 'группа бандитов',
  26: 'несколько бездомных бродяг',
  27: 'группа крестьян',
  28: 'стайка золотых ящеров',
  29: 'торговый караван из Кламата',
  30: 'несколько рад-скорпионов',
  31: 'семейство кротов-гризли',
  32: 'торговый караван из Модока',
  33: 'банда грабителей',
  34: 'банда разбойников',
  35: 'семейство золотых ящеров',
  36: 'большая группа рад-скорпионов',
  37: 'группа рабов и работорговцев',
  38: 'рабы',
  39: 'работорговцы',
  40: 'какой-то отряд',
  41: 'группа кротов-гризли',
  42: 'ватага самогонщиков',
  43: 'отбившиеся от стада брамины',
  44: 'несколько мантисов',
  45: 'отряд грабителей',
  46: 'разбойничья шайка',
  47: 'большая стаюя диких собак',
  48: 'целая туча мантисов',
  49: 'торговец из Модока',
  50: 'торговец и его охранники',
  51: 'мутировавшие кротов-гризли',
  52: 'мутировавшие крысо-кабаны',
  53: 'отшельник',
  54: 'патрульный отряд',
  55: 'банда работорговцев',
  56: 'немного бесноватые призраки',
  57: 'большая толпа бесноватых',
  58: 'несколько призраков-побирушек',
  59: 'кучка жалких побирушек',
  60: 'стадо мутировавших грызунов',
  61: 'несколько ящеров',
  62: 'местные рыбаки',
  63: 'немного дикарей',
  64: 'караван из Ямы',
  65: 'торговый караван из Города-Убежище',
  66: 'караван из Нью-Рено',
  67: 'караван из Реддинга',
  68: 'несколько спиртоносов',
  69: 'несколько трапперов',
  70: 'артель старателей',
  71: 'сообщество мародеров',
  72: 'опасная волчья стая',
  73: 'местные жители',
  74: 'караван из Брокен Хиллс',
  75: 'караван из Гекко',
  76: 'разбойничья шайка',
  77: 'кучка огнедышащих ящеров',
  78: 'огнедышащие ящеры',
  79: 'кучка инопланетян',
  80: 'большая толпа инопланетных туристов',
  81: 'группа смертокогтов',
  82: 'табун псевдо-кентавров',
  83: 'крупный выводок летателей',
  84: 'целая армия летателей и псевдо-кентавров',
  85: 'вооруженный патруль АНКЛАВА',
  86: 'подразделение наемников',
  87: 'хабологисты',
  88: 'банда саботажников',
  89: 'караван из Сан-Франциско',
  90: 'патруль Единства',
  91: 'небольшое сборище воров',
  92: 'группа мафиози',
  93: 'несколько якудза',
  94: 'банда',
  95: 'пешеход',
  96: 'подразделение Рейнджеров Калифорнии',
  97: 'шайка воров',
  98: 'войсковое подразделение армии Повелителя',
  99: 'караван из НКР',
  100: 'караван из Убежище 15',
  101: '',
  102: '',
  103: '',
  104: '',
  105: '',
  106: '',
  107: '',
  108: 'совсем немного муравьев',
  109: '',
  110: 'группа насекомых-мутантов',
  111: 'несколько мятежных рейнджеров Уильяма Коди (только в патруле Хейта)',
  112: 'разномастная шайка бандитов (только в патруле Хейта)',
  113: 'патруль Братства Стали ',
  114: 'легкий патруль Братства Стали',
  115: 'ботолники',
  116: 'отряд Ши',
  117: 'караван Плунта',
  118: 'золотые ящеры',
  119: 'группа кротов-гризли',
  120: 'большая стая диких собак',
  121: 'несколько грызунов',
  122: 'стадо одичавших браминов',
  123: 'кучка муравьев',
  124: 'караван Плунта',
  125: 'группа крестьян',
  126: 'несколько трапперов',
  127: 'банда рейдеров',
  128: 'рейдеры',
  129: 'кучка мантисов',
  130: '',
};

const GROUP_Player = -1
const GROUP_Raiders = 0; // Банда рейдеров
const GROUP_Rad_Scorpions = 1; //Стайка рад-скорпионов
const GROUP_Giant_Rats = 2; // Большие крысомутанты
const GROUP_Merchant_Party = 3; // Группа торговцев
const GROUP_Manti = 4; // Путник
const GROUP_Easy_Deathclaw = 5;
const GROUP_Easy_Gecko = 6; // Группа ящеров
const GROUP_Easy_MoleRat = 7; // Кучка кротов грызли
const GROUP_Easy_Pigrat = 8;
const GROUP_Dog = 9;
const GROUP_Brahmin = 10;
const GROUP_ARRO_Rats = 11; // Несколько грызунов
const GROUP_ARRO_Pig_Rats = 12; // Небольшая стая крысо-кабанов
const GROUP_ARRO_Sm_Scorpions = 13; // Маленькая группка рад-скорпионов
const GROUP_ARRO_Silver_Geckos = 14; // Группа серебряных ящеров
const GROUP_ARRO_Spore_Plants = 15; // Несколько хищных цветков
const GROUP_ARRO_Hunting_Party = 16; //Отряд охотников
const GROUP_ARRO_War_Party = 17; //Отряд дикарей
const GROUP_ARRO_Cannibals = 18; //Стадо канибалов
const GROUP_ARRO_Outcasts = 19; // Несколько изгоев
const GROUP_ARRO_Holy_People = 20; // Несколько святых людей
const GROUP_ARRO_Nomads = 21; // Банда кочевников
const GROUP_ARROK_Molerats = 22; // Группа кротов-гризли
const GROUP_ARROK_Geckos = 23; // Немного ящеров
const GROUP_KLA_Trappers = 24; // Отряд трапперов
const GROUP_KLA_Bandits = 25; // группа бандитов
const GROUP_KLA_Homeless = 26; // несколько бездомных бродяг
const GROUP_KLA_Farmers = 27; // группа крестьян
const GROUP_KLA_Golden_Geckos = 28; // стайка золотых ящеров
const GROUP_KLAD_Caravan = 29; // торговый караван из Кламата
const GROUP_KLAD_Scorpions = 30; // несколько рад-скорпионов
const GROUP_KLAD_Mole_Pig_Rat = 31; // семейство кротов-гризли
const GROUP_DMRV_Caravan = 32; // торговый караван из Модока
const GROUP_DMRV_Robbers = 33; // банда грабителей
const GROUP_DMRV_Highwaymen = 34; // банда разбойников
const GROUP_DMRV_Golden_Geckos = 35; // семейство золотых ящеров
const GROUP_DMRV_Scorpions = 36; // большая группа рад-скорпионов
const GROUP_DEN_Slavers = 37; // группа рабов и работорговцев
const GROUP_DEN_Slave_Run = 38; // рабы
const GROUP_DEN_Slaves = 39; // работорговцы
const GROUP_DEN_Rave_Party = 40; // какой-то отряд
const GROUP_DEN_Molerats = 41; // группа кротов-гризли
const GROUP_MOD_Moonshiners = 42; // ватага самогонщиков
const GROUP_MOD_Wild_Brahmin = 43; // отбившиеся от стада брамины
const GROUP_MOD_Mantis = 44; // несколько мантисов
const GROUP_DVMV_Robbers = 45; // отряд грабителей
const GROUP_DVMV_Highwaymen = 46; // разбойничья шайка
const GROUP_DVMV_Wild_Dogs = 47; // большая стаюя диких собак
const GROUP_DVMV_Mantis_Swarm = 48; // целая туча мантисов
const GROUP_DVMV_Caravan = 49; // торговец из Модока
const GROUP_WILD1_Trader = 50; // торговец и его охранники
const GROUP_WILD2_Mutated_Molerats = 51; // мутировавшие кротов-гризли
const GROUP_WILD2_Mutated_Pig_Rats = 52; // мутировавшие крысо-кабаны
const GROUP_WILD2_Hermit = 53; // отшельник
const GROUP_VPAT_Patrol = 54; // патрульный отряд
const GROUP_VPAT_Strong_Slavers = 55; // банда работорговцев
const GROUP_GECK_Ghoul_Crazies = 56; // немного бесноватые призраки
const GROUP_GECK_Crazies = 57; // большая толпа бесноватых
const GROUP_GECK_Ghoul_Scavs = 58; // несколько призраков-побирушек
const GROUP_GECK_Scavs = 59; // кучка жалких побирушек
const GROUP_GECK_Mutated_Rats = 60; // стадо мутировавших грызунов
const GROUP_GECK_Geckos = 61; // несколько ящеров
const GROUP_FISH_Fisherman = 62; // местные рыбаки
const GROUP_FISH_Wilder = 63; // немного дикарей
const GROUP_DNRV_Den_Caravan = 64; // караван из Ямы
const GROUP_DNRV_Vault_Caravan = 65; // торговый караван из Города-Убежище
const GROUP_DNRV_Reno_Caravan = 66; // караван из Нью-Рено
const GROUP_DNRV_Redding_Caravan = 67; // караван из Реддинга
const GROUP_RED_Bootlegger = 68; // несколько спиртоносов
const GROUP_RED_Trappers = 69; // несколько трапперов
const GROUP_RED_Prospector = 70; // артель старателей
const GROUP_RED_Claim_Jumper = 71; // сообщество мародеров
const GROUP_RED_Wolves = 72; // опасная волчья стая
const GROUP_RED_Homesteaders = 73; // местные жители
const GROUP_RDRC_Broken_Hills_Caravan = 74; // караван из Брокен Хиллс
const GROUP_RDRC_Gecko_Caravan = 75; // караван из Гекко
const GROUP_RDRC_Raiders = 76; // разбойничья шайку
const GROUP_EPA_Fire_Geckos = 77; // кучка огнедышащих ящеров
const GROUP_EPA_Tough_Fire_Geckos = 78; // огнедышащие ящеры
const GROUP_EPA_Alien = 79; // кучка инопланетян
const GROUP_EPA_Tough_Alien = 80; // большая толпа инопланетных туристов
const GROUP_EPA_Deathclaws = 81; // группа смертокогтов
const GROUP_EPA_Centaurs = 82; // табун псевдо-кентавров
const GROUP_EPA_Floaters = 83; // крупный выводок летателей
const GROUP_EPA_Floater_Centaurs = 84; // целая армия летателей и псевдо-кентавров
const GROUP_NAV_Enclave_Patrol = 85; // вооруженный патруль АНКЛАВА
const GROUP_FRAN_Mercenaries = 86; // подразделение наемников
const GROUP_FRAN_Elronologists = 87; // хабологисты
const GROUP_FRAN_Press_Gang = 88; // банда саботажников
const GROUP_FRAN2_San_Fran_Caravan = 89; // караван из Сан-Франциско
const GROUP_BROK_Unity_Patrol = 90; // патруль Единства
const GROUP_BROK_Rogues = 91; // небольшое сборище воров
const GROUP_NEW_Mobsters = 92; // группа мафиози
const GROUP_NEW_Yakuza = 93; // несколько якудза
const GROUP_NEW_Gang = 94; // банда
const GROUP_NEW_Traveller = 95; // пешеход
const GROUP_NCR_Rangers = 96; // подразделение Рейнджеров Калифорнии
const GROUP_NCR_Marauders = 97; // шайка воров
const GROUP_NCR_Masters_Army = 98; // войсковое подразделение армии Повелителя
const GROUP_NCR_Caravan = 99; // караван из НКР
const GROUP_V15_Caravan = 100; // караван из Убежище 15
const GROUP_V15_Squatters = 101;
const GROUP_Special1 = 102;
const GROUP_Bounty_Hunter_Low = 103;
const GROUP_Bounty_Hunter_Low_Mid = 104;
const GROUP_Bounty_Hunter_High_Mid = 105;
const GROUP_Bounty_Hunter_High = 106;
const GROUP_Morton_Brother = 107;
const GROUP_ARRO_Ants = 108; // совсем немного муравьев
const GROUP_Game_Foreshadowing = 109;
const GROUP_SF_Mirelurk = 110; // группа насекомых-мутантов
const GROUP_NCR_Patrol_Rebels = 111; //несколько мятежных рейнджеров Уильяма Коди (только в патруле Хейта)
const GROUP_NCR_Patrol_Raiders = 112 //разномастная шайка бандитов (только в патруле Хейта)
const GROUP_BS_Patrol = 113; // патруль Братства Стали
const GROUP_BS_Patrol_Ligt = 114; // патруль Братства Стали
const GROUP_EPA_Mar = 115; // ботолники
const GROUP_SF_Shi = 116; // отряд Ши
const GROUP_Plunt = 117; // караван Плунта
const GROUP_VAULT_Golden_Geckos = 118;
const GROUP_VAULT_Molerats = 119;
const GROUP_VAULT_Dog = 120;
const GROUP_VAULT_Rat = 121;
const GROUP_VAULT_Brahmins = 122;
const GROUP_VAULT_Ant = 123;
const GROUP_VAULT_BarterPatrol = 124;
const GROUP_VAULT_FarmerPatrol = 125;
const GROUP_VAULT_TraperPatrol = 126;
const GROUP_VAULT_RaiderPatrol = 127;
const GROUP_VAULT_RaiderAtackPatrol = 128;
const GROUP_VAULT_Mantis = 129;
const GROUP_MAX = 130;

/*
 * Worldmap
 * \Server\scripts\worldmap.fos
 */

let Tables = {};
let table;
class Group {

  constructor(groupNumber, ratioMin, ratioMax) {
    this.groupNumber = groupNumber;
    this.ratioMin = ratioMin;
    this.ratioMax = ratioMax;
  }
}
class Check {

  constructor(type, index, operator, value) {
    this.type = type;
    this.index = index;
    this.operator = operator;
    this.value = value;
  }
}

class Encounter {

  constructor(chance, strNum) {
    this.chance = chance;
    this.strNum = strNum;
    this.groups = [];
    this.special = false;
    this.locationPid;
    this.checks = [];
    this.fightings = [];
  }

  AddGroup(groupNumber, ratioMin, ratioMax) {
    let gr = new Group(groupNumber, ratioMin, ratioMax);
    this.groups.push(gr);
    return this;
  }

  Fighting(fromGroup, toGroup) {
    this.fightings.push([fromGroup, toGroup]);
    return this;
  }

  Special(special) {
    this.special = special;
    return this;
  }

  LocationPid(locationPid) {
    this.locationPid = locationPid;
    return this;
  }
  StartLocation(startLocation) {
    return this;
  }

  CheckParam(index, operator, value) {
    let ch = new Check('PARAM', index, operator, value);
    this.checks.push(ch);
    return this;
  }

  CheckLVar(index, operator, value) {
    let ch = new Check('LVAR', index, operator, value);
    this.checks.push(ch);
    return this;
  }

  CheckGVar(index, operator, value) {
    return this;
  }

  CheckHour(operator, value) {
    return this;
  }

  AssignLVar(index, operator, value) {
    let ch = new Check('ASSIGN_LVAR', index, operator, value);
    this.checks.push(ch);
    return this;
  }
}

class EncounterTables {

  constructor(table) {
    this.table = table;
    this.loc = [];
    this.encs = [];
    Tables[table] = this;
  }

  AddLocationPid(loc) {
    this.loc.push(loc);
  }

  AddEncounter(chance, strNum) {
    let enc = new Encounter(chance, strNum);
    this.encs.push(enc);
    return enc;
  }
}

/*
 * Tables init
 * \Server\scripts\worldmap_init.fos
 */

// Arro_M
table = new EncounterTables(TABLE_Arro_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(5, 10033000).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033010).AddGroup(GROUP_ARRO_Cannibals, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033020).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 2).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(5, 10033030).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033130).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033140).AddGroup(GROUP_ARRO_Spore_Plants, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033150).AddGroup(GROUP_ARRO_Pig_Rats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033160).AddGroup(GROUP_ARRO_Rats, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10033170).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(9, 10032510).AddGroup(GROUP_ARRO_Outcasts, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(9, 10032520).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Outcasts, 3, 4).Fighting(0, 1);
table.AddEncounter(3, 10033180).AddGroup(GROUP_ARRO_Ants, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10033190).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10033200).AddGroup(GROUP_ARRO_Pig_Rats, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10033210).AddGroup(GROUP_ARRO_Sm_Scorpions, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10033220).AddGroup(GROUP_ARRO_Ants, 5, 8);
table.AddEncounter(4, 10033230).AddGroup(GROUP_ARRO_War_Party, 3, 6);
table.AddEncounter(4, 10033240).AddGroup(GROUP_ARRO_Nomads, 3, 5);
table.AddEncounter(1, 10033250).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10033260).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(1, 10033270).Special(true).LocationPid(LOCATION_SpecialHamstersEncounter).CheckParam(ST_LEVEL, '>', 1).CheckLVar(LVAR_special_encounter_hamster, '<', 1).AssignLVar(LVAR_special_encounter_hamster, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(1, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Arro_D
table = new EncounterTables(TABLE_Arro_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddEncounter(5, 10033530).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033630).AddGroup(GROUP_ARRO_Cannibals, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033640).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 2).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(5, 10033650).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033660).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033670).AddGroup(GROUP_ARRO_Spore_Plants, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033680).AddGroup(GROUP_ARRO_Pig_Rats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10033690).AddGroup(GROUP_ARRO_Rats, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10033170).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(10, 10032510).AddGroup(GROUP_ARRO_Outcasts, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(10, 10032520).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Outcasts, 3, 4).Fighting(0, 1);
table.AddEncounter(2, 10033710).AddGroup(GROUP_ARRO_Ants, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10033720).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10033730).AddGroup(GROUP_ARRO_Pig_Rats, 4, 6);
table.AddEncounter(3, 10033740).AddGroup(GROUP_ARRO_Sm_Scorpions, 2, 4);
table.AddEncounter(4, 10033750).AddGroup(GROUP_ARRO_Ants, 5, 8);
table.AddEncounter(4, 10033760).AddGroup(GROUP_ARRO_War_Party, 3, 6);
table.AddEncounter(4, 10033770).AddGroup(GROUP_ARRO_Nomads, 3, 5);
table.AddEncounter(1, 10033780).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10033790).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(1, 10033850).Special(true).LocationPid(LOCATION_SpecialHamstersEncounter).CheckParam(ST_LEVEL, '>', 1).CheckLVar(LVAR_special_encounter_hamster, '<', 1).AssignLVar(LVAR_special_encounter_hamster, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(15, 10045830).AddGroup(GROUP_Plunt, 3, 3).AddGroup(GROUP_ARRO_Cannibals, 4, 5).Fighting(0, 1);
table.AddEncounter(15, 10045840).AddGroup(GROUP_Plunt, 3, 3).AddGroup(GROUP_KLAD_Scorpions, 7, 8).Fighting(0, 1);
table.AddEncounter(10, 10045850).AddGroup(GROUP_Plunt, 3, 3);

// Arro_O
table = new EncounterTables(TABLE_Arro_O);
table.AddLocationPid(LOCATION_CoastEncounter9);
table.AddLocationPid(LOCATION_CoastEncounter8);
table.AddLocationPid(LOCATION_CoastEncounter4);
table.AddLocationPid(LOCATION_CoastEncounter3);
table.AddEncounter(5, 10034000).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034010).AddGroup(GROUP_ARRO_Cannibals, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034020).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 2).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(5, 10034030).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034130).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034140).AddGroup(GROUP_ARRO_Spore_Plants, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034150).AddGroup(GROUP_ARRO_Pig_Rats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10034160).AddGroup(GROUP_ARRO_Rats, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(11, 10033170).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(11, 10032510).AddGroup(GROUP_ARRO_Outcasts, 3, 4).AddGroup(GROUP_ARRO_Cannibals, 3, 4).Fighting(0, 1);
table.AddEncounter(10, 10032520).AddGroup(GROUP_ARRO_Hunting_Party, 3, 4).AddGroup(GROUP_ARRO_Outcasts, 3, 4).Fighting(0, 1);
table.AddEncounter(2, 10034180).AddGroup(GROUP_ARRO_Ants, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10034190).AddGroup(GROUP_ARRO_War_Party, 2, 4).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).Fighting(0, 1);
table.AddEncounter(4, 10034200).AddGroup(GROUP_ARRO_Pig_Rats, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10034210).AddGroup(GROUP_ARRO_Sm_Scorpions, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10034220).AddGroup(GROUP_ARRO_Ants, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10034230).AddGroup(GROUP_ARRO_War_Party, 3, 6);
table.AddEncounter(4, 10034240).AddGroup(GROUP_ARRO_Nomads, 3, 5);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Arrok_D
table = new EncounterTables(TABLE_Arrok_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter13);
table.AddEncounter(10, 10034530).AddGroup(GROUP_ARRO_Outcasts, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10034630).AddGroup(GROUP_ARRO_Holy_People, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10034640).AddGroup(GROUP_ARRO_Silver_Geckos, 1, 2).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10034650).AddGroup(GROUP_ARROK_Geckos, 1, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(9, 10034660).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(12, 10034670).AddGroup(GROUP_ARRO_Spore_Plants, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10034680).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(11, 10034690).AddGroup(GROUP_ARROK_Molerats, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10034700).AddGroup(GROUP_ARRO_Holy_People, 4, 6).AddGroup(GROUP_ARRO_War_Party, 2, 4).Fighting(0, 1);
table.AddEncounter(6, 10034710).AddGroup(GROUP_ARRO_Nomads, 2, 4);
table.AddEncounter(1, 10034720).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10034730).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(1, 10034800).Special(true).LocationPid(LOCATION_SpecialKotW).CheckParam(ST_LEVEL, '>', 12).CheckLVar(LVAR_special_encounter_kotw, '<', 1).AssignLVar(LVAR_special_encounter_kotw, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// Arrok_M
table = new EncounterTables(TABLE_Arrok_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_CavernEncounter0);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_CavernEncounter2);
table.AddEncounter(10, 10035000).AddGroup(GROUP_ARRO_Outcasts, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035010).AddGroup(GROUP_ARRO_Holy_People, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035110).AddGroup(GROUP_ARRO_Silver_Geckos, 4, 6).AddGroup(GROUP_ARRO_Spore_Plants, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10035120).AddGroup(GROUP_ARROK_Geckos, 3, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(9, 10035130).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 8).AddGroup(GROUP_ARRO_Spore_Plants, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(11, 10035140).AddGroup(GROUP_ARRO_Spore_Plants, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(11, 10035150).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035160).AddGroup(GROUP_ARROK_Molerats, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10035170).AddGroup(GROUP_ARRO_Holy_People, 4, 6).AddGroup(GROUP_ARRO_War_Party, 2, 4).Fighting(0, 1);
table.AddEncounter(6, 10035180).AddGroup(GROUP_ARRO_Nomads, 2, 4);
table.AddEncounter(5, 10035190).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10035200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Kla_D
table = new EncounterTables(TABLE_Kla_D);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter12);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter13);
table.AddEncounter(1, 10035530).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10035540).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035550).AddGroup(GROUP_KLA_Homeless, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035560).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035660).AddGroup(GROUP_ARRO_Sm_Scorpions, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10035670).AddGroup(GROUP_ARRO_Spore_Plants, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10035680).AddGroup(GROUP_KLA_Bandits, 3, 5).AddGroup(GROUP_KLA_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10035690).AddGroup(GROUP_KLA_Farmers, 2, 4).AddGroup(GROUP_ARROK_Geckos, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10035700).AddGroup(GROUP_KLA_Farmers, 2, 4).AddGroup(GROUP_KLA_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(2, 10035710).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_KLA_Golden_Geckos, 2, 3).Fighting(0, 1);
table.AddEncounter(1, 10035720).AddGroup(GROUP_KLA_Trappers, 2, 4).AddGroup(GROUP_KLA_Bandits, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10035730).AddGroup(GROUP_KLA_Trappers, 4, 6).AddGroup(GROUP_ARROK_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10035740).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_KLA_Homeless, 2, 5).Fighting(0, 1);
table.AddEncounter(3, 10035750).AddGroup(GROUP_KLA_Homeless, 3, 5).AddGroup(GROUP_KLA_Farmers, 2, 4).Fighting(0, 1);
table.AddEncounter(3, 10035760).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_KLA_Farmers, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10035770).AddGroup(GROUP_KLA_Farmers, 2, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 4).Fighting(0, 1);
table.AddEncounter(1, 10035780).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 7).Fighting(0, 1);
table.AddEncounter(2, 10035790).AddGroup(GROUP_KLA_Trappers, 2, 4).AddGroup(GROUP_ARRO_Pig_Rats, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10035800).AddGroup(GROUP_KLA_Farmers, 2, 3).AddGroup(GROUP_ARRO_Pig_Rats, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10035810).AddGroup(GROUP_KLA_Farmers, 2, 4);
table.AddEncounter(8, 10035820).AddGroup(GROUP_KLA_Trappers, 4, 7);
table.AddEncounter(1, 10035840).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(1, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);

// Kla_M
table = new EncounterTables(TABLE_Kla_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter3);
table.AddLocationPid(LOCATION_CavernEncounter5);
table.AddEncounter(1, 10036000).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10036010).AddGroup(GROUP_KLA_Bandits, 3, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10036020).AddGroup(GROUP_KLA_Homeless, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10036030).AddGroup(GROUP_KLA_Golden_Geckos, 1, 3).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10036130).AddGroup(GROUP_ARRO_Sm_Scorpions, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10036140).AddGroup(GROUP_ARRO_Spore_Plants, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10036150).AddGroup(GROUP_KLA_Bandits, 3, 5).AddGroup(GROUP_KLA_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10036160).AddGroup(GROUP_KLA_Farmers, 2, 4).AddGroup(GROUP_ARROK_Geckos, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10036170).AddGroup(GROUP_KLA_Farmers, 2, 4).AddGroup(GROUP_KLA_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(2, 10036180).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_KLA_Golden_Geckos, 3, 7).Fighting(0, 1);
table.AddEncounter(1, 10036190).AddGroup(GROUP_KLA_Trappers, 2, 4).AddGroup(GROUP_KLA_Bandits, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10036200).AddGroup(GROUP_KLA_Trappers, 4, 6).AddGroup(GROUP_ARROK_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10036210).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_KLA_Homeless, 2, 5).Fighting(0, 1);
table.AddEncounter(2, 10036220).AddGroup(GROUP_KLA_Homeless, 3, 5).AddGroup(GROUP_KLA_Farmers, 2, 4).Fighting(0, 1);
table.AddEncounter(2, 10036230).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_KLA_Farmers, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10036240).AddGroup(GROUP_KLA_Farmers, 2, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 4).Fighting(0, 1);
table.AddEncounter(1, 10036250).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 7).Fighting(0, 1);
table.AddEncounter(2, 10036260).AddGroup(GROUP_KLA_Trappers, 2, 4).AddGroup(GROUP_ARRO_Pig_Rats, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10036270).AddGroup(GROUP_KLA_Farmers, 2, 3).AddGroup(GROUP_ARRO_Pig_Rats, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10036280).AddGroup(GROUP_KLA_Farmers, 2, 4);
table.AddEncounter(8, 10036290).AddGroup(GROUP_KLA_Trappers, 4, 7);
table.AddEncounter(5, 10036300).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10036320).Special(true).LocationPid(LOCATION_SpecialHamstersEncounter).CheckParam(ST_LEVEL, '>', 1).CheckLVar(LVAR_special_encounter_hamster, '<', 1).AssignLVar(LVAR_special_encounter_hamster, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(1, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);

// Klad_D   GROUP_Manti
table = new EncounterTables(TABLE_Klad_D);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddEncounter(12, 10036530).AddGroup(GROUP_KLAD_Caravan, 4, 4);
table.AddEncounter(5, 10036630).AddGroup(GROUP_KLA_Trappers, 4, 7);
table.AddEncounter(3, 10036640).AddGroup(GROUP_KLA_Bandits, 3, 6).AddGroup(GROUP_KLAD_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10036650).AddGroup(GROUP_KLA_Bandits, 4, 8).AddGroup(GROUP_KLA_Trappers, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10036660).AddGroup(GROUP_KLAD_Scorpions, 4, 8).AddGroup(GROUP_KLAD_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(3, 10036670).AddGroup(GROUP_KLA_Trappers, 4, 6).AddGroup(GROUP_KLAD_Scorpions, 4, 9).Fighting(0, 1);
table.AddEncounter(9, 10036680).AddGroup(GROUP_KLAD_Scorpions, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(9, 10036690).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(9, 10036700).AddGroup(GROUP_KLA_Bandits, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10036710).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_KLA_Golden_Geckos, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10036720).AddGroup(GROUP_KLAD_Scorpions, 4, 7).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).Fighting(0, 1);
table.AddEncounter(1, 10036730).AddGroup(GROUP_KLAD_Scorpions, 4, 8).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(3, 10036740).AddGroup(GROUP_KLA_Trappers, 3, 6).AddGroup(GROUP_KLAD_Caravan, 4, 5).AddGroup(GROUP_KLA_Bandits, 8, 12).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10036750).AddGroup(GROUP_KLA_Golden_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10036760).AddGroup(GROUP_KLA_Trappers, 3, 5).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 6, 8).Fighting(0, 1);
table.AddEncounter(1, 10036770).AddGroup(GROUP_KLAD_Caravan, 4, 5).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 6, 10).Fighting(0, 1);
table.AddEncounter(1, 10036780).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10036790).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(1, 10036850).Special(true).LocationPid(LOCATION_SpecialKotW).CheckParam(ST_LEVEL, '>', 12).CheckLVar(LVAR_special_encounter_kotw, '<', 1).AssignLVar(LVAR_special_encounter_kotw, '=', 1);
table.AddEncounter(1, 10036860).Special(true).LocationPid(LOCATION_SpecialHamstersEncounter).CheckParam(ST_LEVEL, '>', 1).CheckLVar(LVAR_special_encounter_hamster, '<', 1).AssignLVar(LVAR_special_encounter_hamster, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);
table.AddEncounter(1, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);

// DMRV_D  table.AddEncounter( 1,10036770).AddGroup(GROUP_Plunt,3,3).AddGroup(GROUP_KLAD_Mole_Pig_Rat,6,10).Fighting(0,1);
table = new EncounterTables(TABLE_DMRV_D);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(7, 10037030).AddGroup(GROUP_DMRV_Highwaymen, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037130).AddGroup(GROUP_DMRV_Robbers, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10037140).AddGroup(GROUP_DMRV_Robbers, 4, 5).AddGroup(GROUP_DMRV_Highwaymen, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(2, 10037150).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 6).AddGroup(GROUP_DMRV_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10037160).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037170).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037180).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037190).AddGroup(GROUP_ARRO_Spore_Plants, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10037200).AddGroup(GROUP_DMRV_Robbers, 4, 6).AddGroup(GROUP_DMRV_Highwaymen, 4, 6).Fighting(0, 1);
table.AddEncounter(2, 10037210).AddGroup(GROUP_DMRV_Caravan, 3, 4).AddGroup(GROUP_DMRV_Highwaymen, 5, 7).Fighting(0, 1);
table.AddEncounter(2, 10037220).AddGroup(GROUP_DMRV_Caravan, 3, 4).AddGroup(GROUP_DMRV_Robbers, 5, 7).Fighting(0, 1);
table.AddEncounter(2, 10037230).AddGroup(GROUP_DMRV_Caravan, 3, 4).AddGroup(GROUP_DMRV_Scorpions, 6, 10).Fighting(0, 1);
table.AddEncounter(2, 10037240).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).AddGroup(GROUP_DMRV_Scorpions, 5, 8).Fighting(0, 1);
table.AddEncounter(15, 10037250).AddGroup(GROUP_DMRV_Caravan, 3, 4);
table.AddEncounter(1, 10037260).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10037270).Special(true).LocationPid(LOCATION_SpecialHeadEncounter).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_head, '<', 1).AssignLVar(LVAR_special_encounter_head, '=', 1);
table.AddEncounter(1, 10037320).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(1, 10037330).Special(true).LocationPid(LOCATION_SpecialTrapperHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_trapper_holo, '<', 1).AssignLVar(LVAR_special_trapper_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// DMRV_M
table = new EncounterTables(TABLE_DMRV_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter1);
table.AddLocationPid(LOCATION_CavernEncounter4);
table.AddEncounter(7, 10037500).AddGroup(GROUP_DMRV_Highwaymen, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037510).AddGroup(GROUP_DMRV_Robbers, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037520).AddGroup(GROUP_DMRV_Robbers, 3, 4).AddGroup(GROUP_DMRV_Highwaymen, 3, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10037530).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 6).AddGroup(GROUP_DMRV_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10037630).AddGroup(GROUP_DMRV_Golden_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037640).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037650).AddGroup(GROUP_DMRV_Scorpions, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10037660).AddGroup(GROUP_ARRO_Spore_Plants, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10037670).AddGroup(GROUP_DMRV_Robbers, 5, 8).AddGroup(GROUP_DMRV_Highwaymen, 5, 8).Fighting(0, 1);
table.AddEncounter(2, 10037680).AddGroup(GROUP_DMRV_Caravan, 3, 3).AddGroup(GROUP_DMRV_Highwaymen, 4, 5).Fighting(0, 1);
table.AddEncounter(2, 10037690).AddGroup(GROUP_DMRV_Caravan, 3, 3).AddGroup(GROUP_DMRV_Robbers, 4, 5).Fighting(0, 1);
table.AddEncounter(2, 10037700).AddGroup(GROUP_DMRV_Caravan, 3, 3).AddGroup(GROUP_DMRV_Scorpions, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10037710).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).AddGroup(GROUP_DMRV_Scorpions, 5, 8).Fighting(0, 1);
table.AddEncounter(15, 10037720).AddGroup(GROUP_DMRV_Caravan, 3, 3);
table.AddEncounter(5, 10037730).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Den_D
table = new EncounterTables(TABLE_Den_D);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter7);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(8, 10038030).AddGroup(GROUP_DEN_Slavers, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10038130).AddGroup(GROUP_DMRV_Highwaymen, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10038140).AddGroup(GROUP_DMRV_Robbers, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10038150).AddGroup(GROUP_DMRV_Golden_Geckos, 2, 4).AddGroup(GROUP_ARRO_Spore_Plants, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10038160).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_DEN_Molerats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10038170).AddGroup(GROUP_DMRV_Scorpions, 5, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10038180).AddGroup(GROUP_DEN_Molerats, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10038190).AddGroup(GROUP_DMRV_Robbers, 5, 7).AddGroup(GROUP_DMRV_Highwaymen, 5, 7).Fighting(0, 1);
table.AddEncounter(4, 10038200).AddGroup(GROUP_DEN_Slave_Run, 3, 5).AddGroup(GROUP_DEN_Slaves, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10038210).AddGroup(GROUP_DEN_Slavers, 4, 6).AddGroup(GROUP_DMRV_Robbers, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10038220).AddGroup(GROUP_DEN_Slavers, 4, 6).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10038230).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_DEN_Rave_Party, 6, 10).Fighting(0, 1).LocationPid(LOCATION_DesertEncounter7).CheckHour('>', 19);
table.AddEncounter(8, 10038240).AddGroup(GROUP_DEN_Rave_Party, 6, 10).LocationPid(LOCATION_DesertEncounter7).CheckHour('>', 19);
table.AddEncounter(1, 10038310).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(1, 10034810).Special(true).LocationPid(LOCATION_SpecialDollHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_doll_holo, '<', 1).AssignLVar(LVAR_special_doll_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Den_M
table = new EncounterTables(TABLE_Den_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter0);
table.AddLocationPid(LOCATION_CavernEncounter2);
table.AddEncounter(10, 10038500).AddGroup(GROUP_DEN_Slavers, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10038510).AddGroup(GROUP_DMRV_Highwaymen, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10038520).AddGroup(GROUP_DMRV_Robbers, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10038530).AddGroup(GROUP_DMRV_Golden_Geckos, 2, 4).AddGroup(GROUP_ARRO_Spore_Plants, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10038630).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_DEN_Molerats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10038640).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10038650).AddGroup(GROUP_DEN_Molerats, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10038660).AddGroup(GROUP_DMRV_Robbers, 3, 5).AddGroup(GROUP_DMRV_Highwaymen, 4, 6).Fighting(0, 1);
table.AddEncounter(4, 10038670).AddGroup(GROUP_DEN_Slave_Run, 3, 5).AddGroup(GROUP_DEN_Slaves, 3, 5).Fighting(0, 1);
table.AddEncounter(2, 10038680).AddGroup(GROUP_DEN_Slavers, 4, 6).AddGroup(GROUP_DMRV_Robbers, 3, 5).Fighting(0, 1);
table.AddEncounter(2, 10038690).AddGroup(GROUP_DEN_Slavers, 6, 8).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(5, 10038700).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10038710).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10038720).Special(true).LocationPid(LOCATION_SpecialHamstersEncounter).CheckParam(ST_LEVEL, '>', 1).CheckLVar(LVAR_special_encounter_hamster, '<', 1).AssignLVar(LVAR_special_encounter_hamster, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Band_M
table = new EncounterTables(TABLE_Band_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter0);
table.AddEncounter(5, 10039000).AddGroup(GROUP_DMRV_Highwaymen, 3, 5).AddGroup(GROUP_DMRV_Robbers, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10039010).AddGroup(GROUP_DMRV_Highwaymen, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10039020).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10039030).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_ARRO_Spore_Plants, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(2, 10039130).AddGroup(GROUP_DMRV_Robbers, 5, 6).AddGroup(GROUP_DMRV_Scorpions, 3, 6).Fighting(0, 1);
table.AddEncounter(15, 10039140).AddGroup(GROUP_DMRV_Robbers, 5, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10039150).AddGroup(GROUP_DMRV_Caravan, 4, 4).AddGroup(GROUP_DMRV_Highwaymen, 3, 4).Fighting(0, 1);
table.AddEncounter(4, 10039160).AddGroup(GROUP_DMRV_Caravan, 4, 4).AddGroup(GROUP_DMRV_Robbers, 3, 4).Fighting(0, 1);
table.AddEncounter(1, 10039170).AddGroup(GROUP_DMRV_Highwaymen, 3, 6).AddGroup(GROUP_ARRO_Spore_Plants, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(10, 10039180).AddGroup(GROUP_DMRV_Caravan, 4, 5);
table.AddEncounter(5, 10039190).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Mod_M
table = new EncounterTables(TABLE_Mod_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter4);
table.AddLocationPid(LOCATION_CavernEncounter5);
table.AddEncounter(7, 10039500).AddGroup(GROUP_DMRV_Highwaymen, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10039510).AddGroup(GROUP_DMRV_Robbers, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10039520).AddGroup(GROUP_KLA_Homeless, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10039530).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 7).AddGroup(GROUP_MOD_Mantis, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(6, 10039630).AddGroup(GROUP_MOD_Wild_Brahmin, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(6, 10039640).AddGroup(GROUP_KLAD_Scorpions, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10039650).AddGroup(GROUP_MOD_Moonshiners, 3, 4).AddGroup(GROUP_DMRV_Highwaymen, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10039660).AddGroup(GROUP_DMRV_Highwaymen, 6, 9).AddGroup(GROUP_KLA_Homeless, 3, 6).Fighting(0, 1);
table.AddEncounter(2, 10039670).AddGroup(GROUP_MOD_Moonshiners, 3, 4).AddGroup(GROUP_KLA_Farmers, 3, 5);
table.AddEncounter(3, 10039680).AddGroup(GROUP_MOD_Mantis, 5, 8).AddGroup(GROUP_KLA_Farmers, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10039690).AddGroup(GROUP_MOD_Moonshiners, 3, 5).AddGroup(GROUP_KLA_Farmers, 3, 6).Fighting(0, 1);
table.AddEncounter(4, 10039700).AddGroup(GROUP_MOD_Mantis, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10039710).AddGroup(GROUP_MOD_Mantis, 5, 9).AddGroup(GROUP_DEN_Molerats, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10039720).AddGroup(GROUP_MOD_Moonshiners, 4, 6);
table.AddEncounter(7, 10039730).AddGroup(GROUP_KLA_Farmers, 3, 5);
// table.AddEncounter(100, 10039740).Special(true).LocationPid(LOCATION_BessDead).CheckGVar(GVAR_modoc_brahmin_escaped,'>',0);
table.AddEncounter(5, 10039750).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10039760).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10037330).Special(true).LocationPid(LOCATION_SpecialTrapperHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_trapper_holo, '<', 1).AssignLVar(LVAR_special_trapper_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// DVMV_M
table = new EncounterTables(TABLE_DVMV_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(8, 10040000).AddGroup(GROUP_DVMV_Highwaymen, 5, 7).AddGroup(GROUP_DVMV_Wild_Dogs, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040010).AddGroup(GROUP_DVMV_Robbers, 5, 7).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040020).AddGroup(GROUP_DVMV_Robbers, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10040030).AddGroup(GROUP_DVMV_Highwaymen, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10040130).AddGroup(GROUP_DVMV_Mantis_Swarm, 5, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10040140).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_ARRO_Spore_Plants, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040150).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10040160).AddGroup(GROUP_DVMV_Wild_Dogs, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10040170).AddGroup(GROUP_DVMV_Robbers, 2, 4).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10040180).AddGroup(GROUP_DVMV_Caravan, 5, 5).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10040190).AddGroup(GROUP_DVMV_Caravan, 5, 6).AddGroup(GROUP_DVMV_Robbers, 3, 5).Fighting(0, 1);
table.AddEncounter(3, 10040200).AddGroup(GROUP_DVMV_Caravan, 5, 6).AddGroup(GROUP_DVMV_Highwaymen, 2, 4).Fighting(0, 1);
table.AddEncounter(10, 10040210).AddGroup(GROUP_DVMV_Caravan, 5, 5);
table.AddEncounter(5, 10040220).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10040230).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// DVMV_D
table = new EncounterTables(TABLE_DVMV_D);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter12);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(8, 10040530).AddGroup(GROUP_DVMV_Highwaymen, 5, 7).AddGroup(GROUP_DVMV_Wild_Dogs, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040630).AddGroup(GROUP_DVMV_Robbers, 5, 7).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040640).AddGroup(GROUP_DVMV_Robbers, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10040650).AddGroup(GROUP_DVMV_Highwaymen, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10040660).AddGroup(GROUP_DVMV_Mantis_Swarm, 5, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10040670).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_ARRO_Spore_Plants, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(8, 10040680).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10040690).AddGroup(GROUP_DVMV_Wild_Dogs, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10040700).AddGroup(GROUP_DVMV_Robbers, 2, 4).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10040710).AddGroup(GROUP_DVMV_Caravan, 3, 4).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10040720).AddGroup(GROUP_DVMV_Caravan, 3, 4).AddGroup(GROUP_DVMV_Robbers, 3, 4).Fighting(0, 1);
table.AddEncounter(3, 10040730).AddGroup(GROUP_DVMV_Caravan, 3, 4).AddGroup(GROUP_DVMV_Highwaymen, 3, 4).Fighting(0, 1);
table.AddEncounter(10, 10040740).AddGroup(GROUP_DVMV_Caravan, 3, 4);
table.AddEncounter(1, 10040790).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10040800).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town2).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Wild1_M
table = new EncounterTables(TABLE_Wild1_M);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(10, 10041000).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041010).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041020).AddGroup(GROUP_DMRV_Scorpions, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041030).AddGroup(GROUP_MOD_Wild_Brahmin, 4, 8);
table.AddEncounter(1, 10041130).AddGroup(GROUP_WILD1_Trader, 3, 5).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10041140).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).AddGroup(GROUP_WILD1_Trader, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10041150).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 8).AddGroup(GROUP_MOD_Wild_Brahmin, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10041160).AddGroup(GROUP_DMRV_Scorpions, 3, 6).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).Fighting(0, 1);
table.AddEncounter(1, 10041170).AddGroup(GROUP_DMRV_Scorpions, 6, 10).AddGroup(GROUP_MOD_Wild_Brahmin, 6, 8).Fighting(0, 1);
table.AddEncounter(10, 10041180).AddGroup(GROUP_WILD1_Trader, 3, 4);
table.AddEncounter(5, 10041190).Special(true).LocationPid(LOCATION_SpecialBridgeEncounter).CheckParam(ST_TECHPROG, '>', 2).CheckLVar(LVAR_special_encounter_bridge, '<', 1).AssignLVar(LVAR_special_encounter_bridge, '=', 1);
table.AddEncounter(1, 10041200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10037330).Special(true).LocationPid(LOCATION_SpecialTrapperHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_trapper_holo, '<', 1).AssignLVar(LVAR_special_trapper_holo, '=', 1);
table.AddEncounter(1, 10037330).Special(true).LocationPid(LOCATION_SpecialTrapperHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_trapper_holo, '<', 1).AssignLVar(LVAR_special_trapper_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// Wild1_D
table = new EncounterTables(TABLE_Wild1_D);
table.AddLocationPid(LOCATION_DesertEncounter12);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(10, 10041530).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041630).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041640).AddGroup(GROUP_DMRV_Scorpions, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10041650).AddGroup(GROUP_MOD_Wild_Brahmin, 6, 10);
table.AddEncounter(1, 10041660).AddGroup(GROUP_WILD1_Trader, 3, 6).AddGroup(GROUP_DMRV_Golden_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10041670).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).AddGroup(GROUP_WILD1_Trader, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10041680).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 8).AddGroup(GROUP_MOD_Wild_Brahmin, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10041690).AddGroup(GROUP_DMRV_Scorpions, 3, 6).AddGroup(GROUP_DVMV_Mantis_Swarm, 6, 10).Fighting(0, 1);
table.AddEncounter(1, 10041700).AddGroup(GROUP_DMRV_Scorpions, 6, 10).AddGroup(GROUP_MOD_Wild_Brahmin, 6, 8).Fighting(0, 1);
table.AddEncounter(10, 10041710).AddGroup(GROUP_WILD1_Trader, 3, 4);
table.AddEncounter(1, 10041770).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10041780).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(1, 10037330).Special(true).LocationPid(LOCATION_SpecialTrapperHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_trapper_holo, '<', 1).AssignLVar(LVAR_special_trapper_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Wild2_D
table = new EncounterTables(TABLE_Wild2_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(10, 10042030).AddGroup(GROUP_WILD2_Mutated_Molerats, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10042130).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10042140).AddGroup(GROUP_ARRO_Spore_Plants, 4, 8);
table.AddEncounter(10, 10042150).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 8).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10042160).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10042170).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10042180).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_WILD2_Mutated_Molerats, 3, 6).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10042190).AddGroup(GROUP_WILD2_Mutated_Molerats, 3, 5).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10042200).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 9).AddGroup(GROUP_ARRO_Spore_Plants, 6, 12).Fighting(0, 1);
table.AddEncounter(1, 10042210).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 5).AddGroup(GROUP_DVMV_Wild_Dogs, 5, 8).Fighting(0, 1);
table.AddEncounter(5, 10042220).AddGroup(GROUP_WILD2_Hermit, 1, 2);
table.AddEncounter(1, 10042280).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10042290).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(33, 10042300).Special(true).LocationPid(LOCATION_Quest_VCity_Recon_Cave).CheckLVar(LVAR_vc_guard_rank, '=', 13).AssignLVar(LVAR_vc_guard_rank, '=', 14);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Wild2_M
table = new EncounterTables(TABLE_Wild2_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddEncounter(10, 10042500).AddGroup(GROUP_WILD2_Mutated_Molerats, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10042510).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10042520).AddGroup(GROUP_ARRO_Spore_Plants, 6, 8);
table.AddEncounter(10, 10042530).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 8).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(3, 10042630).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).Fighting(0, 1);
table.AddEncounter(3, 10042640).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 5).Fighting(0, 1);
table.AddEncounter(3, 10042650).AddGroup(GROUP_WILD2_Hermit, 1, 2).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 5).AddGroup(GROUP_WILD2_Mutated_Molerats, 3, 6).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10042660).AddGroup(GROUP_WILD2_Mutated_Molerats, 3, 5).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10042670).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 9).AddGroup(GROUP_ARRO_Spore_Plants, 6, 12).Fighting(0, 1);
table.AddEncounter(1, 10042680).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 3, 5).AddGroup(GROUP_DVMV_Wild_Dogs, 5, 8).Fighting(0, 1);
table.AddEncounter(5, 10042690).AddGroup(GROUP_WILD2_Hermit, 1, 2);
table.AddEncounter(1, 10042710).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town2).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// VPat_M
table = new EncounterTables(TABLE_VPat_M);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddEncounter(10, 10043000).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 6).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10043010).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10043020).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10043030).AddGroup(GROUP_DVMV_Wild_Dogs, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10043130).AddGroup(GROUP_VPAT_Patrol, 3, 4).AddGroup(GROUP_DVMV_Wild_Dogs, 2, 4).AddGroup(GROUP_VPAT_Strong_Slavers, 6, 8).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10043140).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 7).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).Fighting(0, 1);
table.AddEncounter(10, 10043150).AddGroup(GROUP_VPAT_Patrol, 5, 5).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10043160).AddGroup(GROUP_VPAT_Patrol, 3, 5).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10043170).AddGroup(GROUP_VPAT_Patrol, 3, 5).AddGroup(GROUP_DVMV_Wild_Dogs, 6, 10).Fighting(0, 1);
table.AddEncounter(10, 10043180).AddGroup(GROUP_VPAT_Patrol, 3, 4);
table.AddEncounter(1, 10043200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(33, 10042300).Special(true).LocationPid(LOCATION_Quest_VCity_Recon_Cave).CheckLVar(LVAR_vc_guard_rank, '=', 13).AssignLVar(LVAR_vc_guard_rank, '=', 14);
table.AddEncounter(1, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// VPat_D
table = new EncounterTables(TABLE_VPat_D);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter12);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(10, 10043530).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 6).AddGroup(GROUP_DVMV_Wild_Dogs, 3, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10043630).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10043640).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10043650).AddGroup(GROUP_DVMV_Wild_Dogs, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10043660).AddGroup(GROUP_VPAT_Patrol, 3, 5).AddGroup(GROUP_DVMV_Wild_Dogs, 2, 4).AddGroup(GROUP_VPAT_Strong_Slavers, 6, 8).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(2, 10043670).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 7).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).Fighting(0, 1);
table.AddEncounter(10, 10043680).AddGroup(GROUP_VPAT_Patrol, 5, 5).AddGroup(GROUP_VPAT_Strong_Slavers, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10043690).AddGroup(GROUP_VPAT_Patrol, 3, 4).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10043700).AddGroup(GROUP_VPAT_Patrol, 3, 4).AddGroup(GROUP_DVMV_Wild_Dogs, 8, 10).Fighting(0, 1);
table.AddEncounter(10, 10043710).AddGroup(GROUP_VPAT_Patrol, 5, 5);
table.AddEncounter(1, 10043740).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10043770).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Geck_M
table = new EncounterTables(TABLE_Geck_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(10, 10044000).AddGroup(GROUP_GECK_Scavs, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044010).AddGroup(GROUP_GECK_Ghoul_Scavs, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044020).AddGroup(GROUP_GECK_Crazies, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044030).AddGroup(GROUP_GECK_Ghoul_Crazies, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044130).AddGroup(GROUP_GECK_Geckos, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044140).AddGroup(GROUP_DVMV_Wild_Dogs, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044150).AddGroup(GROUP_DMRV_Scorpions, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044160).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044170).AddGroup(GROUP_GECK_Mutated_Rats, 10, 15).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10044180).AddGroup(GROUP_GECK_Scavs, 6, 9).AddGroup(GROUP_GECK_Crazies, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10044190).AddGroup(GROUP_GECK_Ghoul_Scavs, 5, 9).AddGroup(GROUP_GECK_Crazies, 6, 10).Fighting(0, 1);
table.AddEncounter(1, 10044200).AddGroup(GROUP_GECK_Geckos, 7, 12).AddGroup(GROUP_GECK_Crazies, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10044210).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 5, 9).AddGroup(GROUP_GECK_Ghoul_Scavs, 2, 5).Fighting(0, 1);
table.AddEncounter(1, 10044230).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Geck_D
table = new EncounterTables(TABLE_Geck_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddEncounter(2, 10044500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10044530).AddGroup(GROUP_GECK_Scavs, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044630).AddGroup(GROUP_GECK_Ghoul_Scavs, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044640).AddGroup(GROUP_GECK_Crazies, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10044650).AddGroup(GROUP_GECK_Ghoul_Crazies, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044660).AddGroup(GROUP_GECK_Geckos, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044670).AddGroup(GROUP_DVMV_Wild_Dogs, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044680).AddGroup(GROUP_DMRV_Scorpions, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044690).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10044700).AddGroup(GROUP_GECK_Mutated_Rats, 10, 15).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10044710).AddGroup(GROUP_GECK_Scavs, 6, 9).AddGroup(GROUP_GECK_Crazies, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10044720).AddGroup(GROUP_GECK_Ghoul_Scavs, 5, 9).AddGroup(GROUP_GECK_Crazies, 6, 10).Fighting(0, 1);
table.AddEncounter(1, 10044730).AddGroup(GROUP_GECK_Geckos, 7, 12).AddGroup(GROUP_GECK_Crazies, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10044740).AddGroup(GROUP_WILD2_Mutated_Pig_Rats, 5, 9).AddGroup(GROUP_GECK_Ghoul_Scavs, 2, 5).Fighting(0, 1);
table.AddEncounter(1, 10044770).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10044780).Special(true).Special(true).LocationPid(LOCATION_SpecialTeleportEncounter).CheckParam(ST_LEVEL, '>', 10).CheckLVar(LVAR_special_encounter_teleport, '<', 1).AssignLVar(LVAR_special_encounter_teleport, '=', 1);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Fish_O
table = new EncounterTables(TABLE_Fish_O);
table.AddLocationPid(LOCATION_CoastEncounter6);
table.AddLocationPid(LOCATION_CoastEncounter5);
table.AddLocationPid(LOCATION_CoastEncounter4);
table.AddLocationPid(LOCATION_CoastEncounter1);
table.AddLocationPid(LOCATION_CoastEncounter8);
table.AddEncounter(10, 10045000).AddGroup(GROUP_ARRO_Cannibals, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045010).AddGroup(GROUP_FISH_Wilder, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045020).AddGroup(GROUP_ARRO_War_Party, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045030).AddGroup(GROUP_ARRO_Outcasts, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045130).AddGroup(GROUP_DMRV_Scorpions, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045140).AddGroup(GROUP_DEN_Molerats, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10045150).AddGroup(GROUP_FISH_Fisherman, 3, 5).AddGroup(GROUP_ARRO_Cannibals, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10045160).AddGroup(GROUP_ARRO_Cannibals, 4, 7).AddGroup(GROUP_FISH_Wilder, 3, 5).Fighting(0, 1);
table.AddEncounter(1, 10045170).AddGroup(GROUP_DMRV_Scorpions, 4, 8).AddGroup(GROUP_FISH_Wilder, 3, 6).Fighting(0, 1);
table.AddEncounter(10, 10045180).AddGroup(GROUP_FISH_Fisherman, 3, 6);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Prim_D            table.AddEncounter( 1,10036770).AddGroup(GROUP_Plunt,3,3).AddGroup(GROUP_KLAD_Mole_Pig_Rat,6,10).Fighting(0,1);
table = new EncounterTables(TABLE_Prim_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter13);
table.AddEncounter(2, 10045500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(7, 10045530).AddGroup(GROUP_ARRO_Cannibals, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10045630).AddGroup(GROUP_ARRO_Outcasts, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10045640).AddGroup(GROUP_FISH_Wilder, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10045650).AddGroup(GROUP_ARRO_War_Party, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10045660).AddGroup(GROUP_KLA_Golden_Geckos, 2, 4).AddGroup(GROUP_ARRO_Spore_Plants, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10045670).AddGroup(GROUP_KLA_Golden_Geckos, 2, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10045680).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10045690).AddGroup(GROUP_DMRV_Scorpions, 4, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10045700).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10045710).AddGroup(GROUP_KLA_Golden_Geckos, 3, 5).AddGroup(GROUP_ARRO_Outcasts, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10045720).AddGroup(GROUP_KLA_Golden_Geckos, 3, 5).AddGroup(GROUP_FISH_Wilder, 3, 5).Fighting(0, 1);
table.AddEncounter(7, 10045730).AddGroup(GROUP_KLAD_Scorpions, 4, 8).AddGroup(GROUP_ARRO_Cannibals, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10045740).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_WILD2_Hermit, 1, 2).Fighting(0, 1);
table.AddEncounter(10, 10045750).AddGroup(GROUP_WILD2_Hermit, 1, 2);
table.AddEncounter(1, 10045800).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10045810).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Prim_M
table = new EncounterTables(TABLE_Prim_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(7, 10046000).AddGroup(GROUP_ARRO_Cannibals, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10046010).AddGroup(GROUP_ARRO_Outcasts, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10046020).AddGroup(GROUP_FISH_Wilder, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10046030).AddGroup(GROUP_ARRO_War_Party, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10046130).AddGroup(GROUP_KLA_Golden_Geckos, 2, 5).AddGroup(GROUP_ARRO_Spore_Plants, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10046140).AddGroup(GROUP_KLA_Golden_Geckos, 2, 5).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10046150).AddGroup(GROUP_KLA_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10046160).AddGroup(GROUP_DMRV_Scorpions, 4, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10046170).AddGroup(GROUP_ARRO_Sm_Scorpions, 4, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10046180).AddGroup(GROUP_KLA_Golden_Geckos, 3, 5).AddGroup(GROUP_ARRO_Outcasts, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10046190).AddGroup(GROUP_KLA_Golden_Geckos, 3, 5).AddGroup(GROUP_FISH_Wilder, 3, 5).Fighting(0, 1);
table.AddEncounter(7, 10046200).AddGroup(GROUP_KLAD_Scorpions, 4, 8).AddGroup(GROUP_ARRO_Cannibals, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10046210).AddGroup(GROUP_ARRO_Sm_Scorpions, 3, 6).AddGroup(GROUP_WILD2_Hermit, 1, 2).Fighting(0, 1);
table.AddEncounter(10, 10046220).AddGroup(GROUP_WILD2_Hermit, 1, 2);
table.AddEncounter(1, 10046240).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// DNRV_D
table = new EncounterTables(TABLE_DNRV_D);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(2, 10046500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10046530).AddGroup(GROUP_DNRV_Den_Caravan, 3, 4).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10046630).AddGroup(GROUP_DVMV_Highwaymen, 3, 5).AddGroup(GROUP_DVMV_Robbers, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10046640).AddGroup(GROUP_DVMV_Highwaymen, 6, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10046650).AddGroup(GROUP_DVMV_Robbers, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10046660).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 4).AddGroup(GROUP_DVMV_Highwaymen, 4, 7).Fighting(0, 1);
table.AddEncounter(5, 10046670).AddGroup(GROUP_DNRV_Reno_Caravan, 4, 4).AddGroup(GROUP_DVMV_Robbers, 4, 7).Fighting(0, 1);
table.AddEncounter(5, 10046680).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5).AddGroup(GROUP_DVMV_Highwaymen, 4, 7).Fighting(0, 1);
table.AddEncounter(10, 10046690).AddGroup(GROUP_DVMV_Robbers, 2, 5).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10046700).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10046710).AddGroup(GROUP_DVMV_Highwaymen, 6, 8).AddGroup(GROUP_DVMV_Robbers, 6, 10).Fighting(0, 1);
table.AddEncounter(5, 10046720).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 6);
table.AddEncounter(7, 10046730).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5);
table.AddEncounter(1, 10046790).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10046800).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(5, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_NCR_Caravan, 5, 10).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_V15_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080110).Special(true).LocationPid(LOCATION_DesertEncounter10).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 5, 10).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4).AddGroup(GROUP_DNRV_Den_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// DNRV_M
table = new EncounterTables(TABLE_DNRV_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter3);
table.AddLocationPid(LOCATION_CavernEncounter4);
table.AddLocationPid(LOCATION_CavernEncounter1);
table.AddEncounter(10, 10047000).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10047010).AddGroup(GROUP_DVMV_Highwaymen, 3, 5).AddGroup(GROUP_DVMV_Robbers, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10047020).AddGroup(GROUP_DVMV_Highwaymen, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10047030).AddGroup(GROUP_DVMV_Robbers, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10047130).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 4).AddGroup(GROUP_DVMV_Highwaymen, 4, 8).Fighting(0, 1);
table.AddEncounter(5, 10047140).AddGroup(GROUP_DNRV_Reno_Caravan, 4, 5).AddGroup(GROUP_DVMV_Robbers, 4, 8).Fighting(0, 1);
table.AddEncounter(5, 10047150).AddGroup(GROUP_DNRV_Den_Caravan, 4, 4).AddGroup(GROUP_DVMV_Highwaymen, 4, 8).Fighting(0, 1);
table.AddEncounter(5, 10047160).AddGroup(GROUP_DVMV_Robbers, 3, 5).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10047170).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).Fighting(0, 1);
table.AddEncounter(1, 10047180).AddGroup(GROUP_DVMV_Highwaymen, 6, 6).AddGroup(GROUP_DVMV_Robbers, 6, 10).Fighting(0, 1);
table.AddEncounter(5, 10047190).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 4);
table.AddEncounter(7, 10047200).AddGroup(GROUP_DNRV_Den_Caravan, 4, 5);
table.AddEncounter(1, 10047220).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 5, 10).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4).AddGroup(GROUP_DNRV_Den_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Red_D
table = new EncounterTables(TABLE_Red_D);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter7);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(10, 10047530).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_RED_Wolves, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10047630).AddGroup(GROUP_RED_Claim_Jumper, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10047640).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10047650).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10047660).AddGroup(GROUP_RED_Prospector, 4, 6).AddGroup(GROUP_RED_Claim_Jumper, 4, 8).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 9);
table.AddEncounter(5, 10047670).AddGroup(GROUP_RED_Trappers, 4, 6).AddGroup(GROUP_DMRV_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10047680).AddGroup(GROUP_RED_Bootlegger, 3, 5).AddGroup(GROUP_RED_Wolves, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10047690).AddGroup(GROUP_RED_Homesteaders, 2, 4).AddGroup(GROUP_RED_Claim_Jumper, 4, 6).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 9);
table.AddEncounter(5, 10047700).AddGroup(GROUP_RED_Homesteaders, 4, 6).AddGroup(GROUP_RED_Wolves, 4, 8).Fighting(0, 1);
table.AddEncounter(7, 10047710).AddGroup(GROUP_RED_Bootlegger, 4, 6);
table.AddEncounter(7, 10047720).AddGroup(GROUP_RED_Trappers, 4, 6);
table.AddEncounter(7, 10047730).AddGroup(GROUP_RED_Prospector, 3, 6);
table.AddEncounter(1, 10047770).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10047780).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10047790).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(100, 10080450).LocationPid(LOCATION_DesertEncounter8).AddGroup(GROUP_RED_Wolves, 20, 25).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_hell_reactor_dclaws, '>', 0).CheckLVar(LVAR_hell_reactor_dclaws, '<', 2).AssignLVar(LVAR_hell_reactor_dclaws, '=', 2);

// Red_M
table = new EncounterTables(TABLE_Red_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter4);
table.AddLocationPid(LOCATION_CavernEncounter5);
table.AddEncounter(10, 10048000).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_RED_Wolves, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10048010).AddGroup(GROUP_RED_Claim_Jumper, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10048020).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10048030).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10048130).AddGroup(GROUP_RED_Prospector, 3, 5).AddGroup(GROUP_RED_Claim_Jumper, 2, 4).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 9);
table.AddEncounter(10, 10048140).AddGroup(GROUP_RED_Trappers, 4, 6).AddGroup(GROUP_DMRV_Golden_Geckos, 2, 4).Fighting(0, 1);
table.AddEncounter(1, 10048150).AddGroup(GROUP_RED_Bootlegger, 2, 4).AddGroup(GROUP_RED_Wolves, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10048160).AddGroup(GROUP_RED_Homesteaders, 2, 4).AddGroup(GROUP_RED_Claim_Jumper, 6, 8).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 9);
table.AddEncounter(5, 10048170).AddGroup(GROUP_RED_Homesteaders, 4, 6).AddGroup(GROUP_RED_Wolves, 4, 8).Fighting(0, 1);
table.AddEncounter(7, 10048180).AddGroup(GROUP_RED_Bootlegger, 4, 6);
table.AddEncounter(7, 10048190).AddGroup(GROUP_RED_Trappers, 4, 6);
table.AddEncounter(7, 10048200).AddGroup(GROUP_RED_Prospector, 3, 6);
table.AddEncounter(1, 10048220).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Wild3_M
table = new EncounterTables(TABLE_Wild3_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddEncounter(1, 10048500).AddGroup(GROUP_RED_Wolves, 3, 6).AddGroup(GROUP_WILD2_Mutated_Molerats, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10048510).AddGroup(GROUP_DMRV_Scorpions, 5, 10).AddGroup(GROUP_RED_Wolves, 5, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(1, 10048520).AddGroup(GROUP_WILD2_Mutated_Molerats, 4, 9).AddGroup(GROUP_DMRV_Scorpions, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10048530).AddGroup(GROUP_DMRV_Golden_Geckos, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10048630).AddGroup(GROUP_RED_Wolves, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10048640).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10048650).AddGroup(GROUP_DMRV_Scorpions, 7, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10048660).AddGroup(GROUP_RED_Wolves, 7, 12).AddGroup(GROUP_DMRV_Golden_Geckos, 5, 8).Fighting(0, 1);
table.AddEncounter(1, 10048670).AddGroup(GROUP_WILD2_Mutated_Molerats, 4, 9).AddGroup(GROUP_DMRV_Golden_Geckos, 7, 12).Fighting(0, 1);
table.AddEncounter(1, 10048680).AddGroup(GROUP_WILD2_Mutated_Molerats, 5, 9).AddGroup(GROUP_DMRV_Scorpions, 6, 9).Fighting(0, 1);
table.AddEncounter(1, 10048700).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// RDRC_M
table = new EncounterTables(TABLE_RDRC_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(25, 10049000).AddGroup(GROUP_RDRC_Raiders, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(15, 10049010).AddGroup(GROUP_RED_Wolves, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10049020).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).AddGroup(GROUP_RDRC_Raiders, 3, 6).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(5, 10049030).AddGroup(GROUP_DNRV_Reno_Caravan, 4, 5).AddGroup(GROUP_RDRC_Raiders, 3, 5).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(5, 10049130).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 4).AddGroup(GROUP_RDRC_Raiders, 4, 6).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(3, 10049140).AddGroup(GROUP_RDRC_Gecko_Caravan, 3, 5).AddGroup(GROUP_RDRC_Raiders, 5, 7).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(6, 10049150).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5);
table.AddEncounter(6, 10049160).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 5);
table.AddEncounter(6, 10049170).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3);
table.AddEncounter(6, 10049180).AddGroup(GROUP_RDRC_Gecko_Caravan, 3, 6);
table.AddEncounter(1, 10049200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(3, 10080430).AddGroup(GROUP_Manti, 1, 1);

// RDRC_D
table = new EncounterTables(TABLE_RDRC_D);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(2, 10049500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(25, 10049530).AddGroup(GROUP_RDRC_Raiders, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(15, 10049630).AddGroup(GROUP_RED_Wolves, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10049640).AddGroup(GROUP_DNRV_Vault_Caravan, 4, 5).AddGroup(GROUP_RDRC_Raiders, 3, 6).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(5, 10049650).AddGroup(GROUP_DNRV_Reno_Caravan, 4, 5).AddGroup(GROUP_RDRC_Raiders, 3, 4).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(3, 10049660).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 4).AddGroup(GROUP_RDRC_Raiders, 4, 5).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(8, 10049670).AddGroup(GROUP_RDRC_Gecko_Caravan, 3, 5).AddGroup(GROUP_RDRC_Raiders, 3, 5).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(6, 10049680).AddGroup(GROUP_DNRV_Vault_Caravan, 3, 6);
table.AddEncounter(6, 10049690).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(6, 10049700).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3);
table.AddEncounter(6, 10049710).AddGroup(GROUP_RDRC_Gecko_Caravan, 3, 6);
table.AddEncounter(1, 10049760).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10049770).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10053210).Special(true).LocationPid(LOCATION_SpecialSoldierHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_soldier_holo, '=', 0).AssignLVar(LVAR_special_soldier_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(4, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Raid_M
table = new EncounterTables(TABLE_Raid_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(15, 10050000).AddGroup(GROUP_RDRC_Raiders, 5, 7).AddGroup(GROUP_RED_Wolves, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(15, 10050010).AddGroup(GROUP_ARRO_Spore_Plants, 4, 10).AddGroup(GROUP_RED_Wolves, 5, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(30, 10050020).AddGroup(GROUP_RDRC_Raiders, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(15, 10050030).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10050130).AddGroup(GROUP_DMRV_Scorpions, 7, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10050140).AddGroup(GROUP_RED_Wolves, 5, 10).AddGroup(GROUP_RDRC_Raiders, 4, 6).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(1, 10050160).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Raid_D
table = new EncounterTables(TABLE_Raid_D);
table.AddLocationPid(LOCATION_DesertEncounter7);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter7);
table.AddLocationPid(LOCATION_DesertEncounter12);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(2, 10050500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(14, 10050530).AddGroup(GROUP_RDRC_Raiders, 5, 6).AddGroup(GROUP_RED_Wolves, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(14, 10050630).AddGroup(GROUP_ARRO_Spore_Plants, 4, 10).AddGroup(GROUP_RED_Wolves, 5, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(30, 10050640).AddGroup(GROUP_RDRC_Raiders, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(15, 10050650).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(14, 10050660).AddGroup(GROUP_DMRV_Scorpions, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10050670).AddGroup(GROUP_RED_Wolves, 5, 10).AddGroup(GROUP_RDRC_Raiders, 4, 6).Fighting(0, 1).CheckGVar(GVAR_raiders_dead, '<', 1);
table.AddEncounter(1, 10050700).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10050720).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10050730).Special(true).LocationPid(LOCATION_SpecialWoodsmanEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_woodsman, '<', 1).AssignLVar(LVAR_special_encounter_woodsman, '=', 1);
table.AddEncounter(1, 10050740).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Nav_D
table = new EncounterTables(TABLE_Nav_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter13);
table.AddEncounter(80, 10051030).AddGroup(GROUP_NAV_Enclave_Patrol, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10051040).AddGroup(GROUP_NAV_Enclave_Patrol, 4, 7).AddGroup(GROUP_BS_Patrol, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town2).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(3, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Nav_M
table = new EncounterTables(TABLE_Nav_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddEncounter(100, 10051500).AddGroup(GROUP_NAV_Enclave_Patrol, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town2).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(3, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Nav_O
table = new EncounterTables(TABLE_Nav_O);
table.AddLocationPid(LOCATION_CoastEncounter3);
table.AddLocationPid(LOCATION_CoastEncounter4);
table.AddLocationPid(LOCATION_CoastEncounter6);
table.AddLocationPid(LOCATION_CoastEncounter8);
table.AddEncounter(100, 10052000).AddGroup(GROUP_NAV_Enclave_Patrol, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10080100).Special(true).LocationPid(LOCATION_Lost_Town2).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(3, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// EPA_D
table = new EncounterTables(TABLE_EPA_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddEncounter(2, 10052500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(4, 10052530).AddGroup(GROUP_EPA_Tough_Alien, 3, 6).AddGroup(GROUP_EPA_Deathclaws, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10052630).AddGroup(GROUP_EPA_Floater_Centaurs, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052640).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052650).AddGroup(GROUP_EPA_Tough_Alien, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052660).AddGroup(GROUP_EPA_Deathclaws, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052670).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10052680).AddGroup(GROUP_EPA_Alien, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052690).AddGroup(GROUP_EPA_Centaurs, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10052700).AddGroup(GROUP_EPA_Floaters, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10052750).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10052780).Special(true).LocationPid(LOCATION_SpecialCafeEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_gecko_find_woody, '<', 1).AssignLVar(LVAR_gecko_find_woody, '=', 1);
table.AddEncounter(1, 10053210).Special(true).LocationPid(LOCATION_SpecialSoldierHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_soldier_holo, '=', 0).AssignLVar(LVAR_special_soldier_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
//table.AddEncounter( 5, 10080430 ).AddGroup( GROUP_Manti, 1, 1 );

// EPA_M
table = new EncounterTables(TABLE_EPA_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(4, 10053000).AddGroup(GROUP_EPA_Tough_Alien, 5, 10).AddGroup(GROUP_EPA_Deathclaws, 4, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(12, 10053010).AddGroup(GROUP_EPA_Floater_Centaurs, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053020).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10053030).AddGroup(GROUP_EPA_Tough_Alien, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053130).AddGroup(GROUP_EPA_Deathclaws, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10053040).AddGroup(GROUP_EPA_Deathclaws, 6, 10).AddGroup(GROUP_BS_Patrol_Ligt, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10053140).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10053150).AddGroup(GROUP_EPA_Alien, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053160).AddGroup(GROUP_EPA_Centaurs, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053170).AddGroup(GROUP_EPA_Floaters, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10053190).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(1, 10053200).Special(true).LocationPid(LOCATION_SpecialUfo).CheckParam(ST_LEVEL, '>', 10).CheckLVar(LVAR_special_encounter_ufo, '<', 1).AssignLVar(LVAR_special_encounter_ufo, '=', 1);
table.AddEncounter(1, 10053210).Special(true).LocationPid(LOCATION_SpecialSoldierHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_soldier_holo, '=', 0).AssignLVar(LVAR_special_soldier_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
//table.AddEncounter( 5, 10080430 ).AddGroup( GROUP_Manti, 1, 1 );

// EPA_C
table = new EncounterTables(TABLE_EPA_C);
table.AddLocationPid(LOCATION_CityEncounter1);
table.AddLocationPid(LOCATION_CityEncounter2);
table.AddLocationPid(LOCATION_CityEncounter3);
table.AddLocationPid(LOCATION_CityEncounter4);
table.AddLocationPid(LOCATION_CityEncounter5);
table.AddLocationPid(LOCATION_CityEncounter6);
table.AddLocationPid(LOCATION_CityEncounter7);
table.AddLocationPid(LOCATION_CityEncounter8);
table.AddEncounter(4, 10053500).AddGroup(GROUP_EPA_Tough_Alien, 3, 6).AddGroup(GROUP_EPA_Deathclaws, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(10, 10053510).AddGroup(GROUP_EPA_Floater_Centaurs, 6, 8).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(1, 2).Fighting(0, 2);
table.AddEncounter(10, 10053520).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053530).AddGroup(GROUP_EPA_Tough_Alien, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10053540).AddGroup(GROUP_EPA_Tough_Alien, 6, 8).AddGroup(GROUP_BS_Patrol_Ligt, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(1, 2).Fighting(0, 2);
table.AddEncounter(10, 10053630).AddGroup(GROUP_EPA_Deathclaws, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053640).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10053650).AddGroup(GROUP_EPA_Alien, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053660).AddGroup(GROUP_EPA_Centaurs, 6, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10053670).AddGroup(GROUP_EPA_Floaters, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10054230).Special(true).LocationPid(LOCATION_SpecialTeleportEncounter).CheckParam(ST_LEVEL, '>', 10).CheckLVar(LVAR_special_encounter_teleport, '<', 1).AssignLVar(LVAR_special_encounter_teleport, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
//table.AddEncounter( 5, 10080430 ).AddGroup( GROUP_Manti, 1, 1 );

// Wild4_D
table = new EncounterTables(TABLE_Wild4_D);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(2, 10054000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(35, 10054030).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(35, 10054130).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(30, 10054140).AddGroup(GROUP_DMRV_Golden_Geckos, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10054190).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10054220).Special(true).LocationPid(LOCATION_SpecialCafeEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_gecko_find_woody, '<', 1).AssignLVar(LVAR_gecko_find_woody, '=', 1);
table.AddEncounter(1, 10054230).Special(true).LocationPid(LOCATION_SpecialTeleportEncounter).CheckParam(ST_LEVEL, '>', 10).CheckLVar(LVAR_special_encounter_teleport, '<', 1).AssignLVar(LVAR_special_encounter_teleport, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Wild4_M
table = new EncounterTables(TABLE_Wild4_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(35, 10054500).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 8, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(35, 10054510).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10054520).AddGroup(GROUP_DMRV_Golden_Geckos, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Wild4_O
table = new EncounterTables(TABLE_Wild4_O);
table.AddLocationPid(LOCATION_CoastEncounter1);
table.AddLocationPid(LOCATION_CoastEncounter2);
table.AddEncounter(35, 10055000).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 8, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(35, 10055010).AddGroup(GROUP_EPA_Fire_Geckos, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10055020).AddGroup(GROUP_DMRV_Golden_Geckos, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// SRNRRN_D
table = new EncounterTables(TABLE_SRNRRN_D);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(7, 10055530).AddGroup(GROUP_EPA_Deathclaws, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10055630).AddGroup(GROUP_EPA_Fire_Geckos, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10055640).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 5).AddGroup(GROUP_EPA_Deathclaws, 3, 5).Fighting(0, 1);
table.AddEncounter(3, 10055650).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 3, 5).AddGroup(GROUP_EPA_Deathclaws, 4, 7).Fighting(0, 1);
table.AddEncounter(8, 10055660).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 4).AddGroup(GROUP_EPA_Fire_Geckos, 4, 6).Fighting(0, 1);
table.AddEncounter(8, 10055670).AddGroup(GROUP_NCR_Caravan, 5, 7).AddGroup(GROUP_EPA_Fire_Geckos, 4, 7).Fighting(0, 1);
table.AddEncounter(10, 10055680).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 3, 5);
table.AddEncounter(13, 10055690).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 5);
table.AddEncounter(13, 10055700).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 5);
table.AddEncounter(10, 10055710).AddGroup(GROUP_NCR_Caravan, 7, 11).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(1, 10055760).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(4, 10080110).Special(true).LocationPid(LOCATION_DesertEncounter16).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 5, 10).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4).AddGroup(GROUP_DNRV_Reno_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// SRNRRN_M
table = new EncounterTables(TABLE_SRNRRN_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CavernEncounter0);
table.AddLocationPid(LOCATION_CavernEncounter2);
table.AddLocationPid(LOCATION_CavernEncounter1);
table.AddEncounter(8, 10056000).AddGroup(GROUP_EPA_Deathclaws, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10056010).AddGroup(GROUP_EPA_Fire_Geckos, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10056020).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 5).AddGroup(GROUP_EPA_Deathclaws, 3, 5).Fighting(0, 1);
table.AddEncounter(3, 10056030).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 3, 6).AddGroup(GROUP_EPA_Deathclaws, 4, 7).Fighting(0, 1);
table.AddEncounter(8, 10056130).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 5).AddGroup(GROUP_EPA_Fire_Geckos, 4, 6).Fighting(0, 1);
table.AddEncounter(8, 10056140).AddGroup(GROUP_NCR_Caravan, 3, 7).AddGroup(GROUP_EPA_Fire_Geckos, 3, 7).Fighting(0, 1);
table.AddEncounter(10, 10056150).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 3, 6);
table.AddEncounter(15, 10056160).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 5);
table.AddEncounter(13, 10056170).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(10, 10056180).AddGroup(GROUP_NCR_Caravan, 7, 11).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(1, 10056200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// New_D
table = new EncounterTables(TABLE_New_D);
table.AddLocationPid(LOCATION_DesertEncounter7);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(2, 10056500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(15, 10056530).AddGroup(GROUP_NEW_Yakuza, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10056630).AddGroup(GROUP_NEW_Gang, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10056640).AddGroup(GROUP_RED_Wolves, 7, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10056650).AddGroup(GROUP_NEW_Mobsters, 6, 8).AddGroup(GROUP_NEW_Yakuza, 5, 8).Fighting(0, 1);
table.AddEncounter(5, 10056660).AddGroup(GROUP_NEW_Mobsters, 6, 8).AddGroup(GROUP_NEW_Gang, 5, 8).Fighting(0, 1);
table.AddEncounter(20, 10056670).AddGroup(GROUP_NEW_Mobsters, 6, 8);
table.AddEncounter(10, 10056680).AddGroup(GROUP_NEW_Traveller, 1, 2);
table.AddEncounter(1, 10056750).Special(true).LocationPid(LOCATION_SpecialUnwashedEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_unwashed, '<', 1).AssignLVar(LVAR_special_encounter_unwashed, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// New_M
table = new EncounterTables(TABLE_New_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(15, 10057000).AddGroup(GROUP_NEW_Yakuza, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10057010).AddGroup(GROUP_NEW_Gang, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10057020).AddGroup(GROUP_RED_Wolves, 7, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10057030).AddGroup(GROUP_NEW_Mobsters, 6, 8).AddGroup(GROUP_NEW_Yakuza, 5, 8).Fighting(0, 1);
table.AddEncounter(5, 10057130).AddGroup(GROUP_NEW_Mobsters, 6, 8).AddGroup(GROUP_NEW_Gang, 5, 8).Fighting(0, 1);
table.AddEncounter(20, 10057140).AddGroup(GROUP_NEW_Mobsters, 6, 8);
table.AddEncounter(10, 10057150).AddGroup(GROUP_NEW_Traveller, 1, 2);
table.AddEncounter(1, 10057170).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// New_C
table = new EncounterTables(TABLE_New_C);
table.AddLocationPid(LOCATION_CityEncounter1);
table.AddLocationPid(LOCATION_CityEncounter2);
table.AddLocationPid(LOCATION_CityEncounter3);
table.AddLocationPid(LOCATION_CityEncounter4);
table.AddLocationPid(LOCATION_CityEncounter5);
table.AddLocationPid(LOCATION_CityEncounter6);
table.AddLocationPid(LOCATION_CityEncounter7);
table.AddLocationPid(LOCATION_CityEncounter8);
table.AddEncounter(15, 10057500).AddGroup(GROUP_NEW_Yakuza, 5, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10057510).AddGroup(GROUP_NEW_Gang, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10057520).AddGroup(GROUP_RED_Wolves, 7, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10057530).AddGroup(GROUP_NEW_Mobsters, 4, 8).AddGroup(GROUP_NEW_Yakuza, 5, 8).Fighting(0, 1);
table.AddEncounter(5, 10057630).AddGroup(GROUP_NEW_Mobsters, 4, 8).AddGroup(GROUP_NEW_Gang, 5, 8).Fighting(0, 1);
table.AddEncounter(20, 10057640).AddGroup(GROUP_NEW_Mobsters, 4, 8);
table.AddEncounter(10, 10057650).AddGroup(GROUP_NEW_Traveller, 1, 2);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Brok_D
table = new EncounterTables(TABLE_Brok_D);
table.AddLocationPid(LOCATION_DesertEncounter8);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(2, 10058000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(2, 10058010).Special(true).LocationPid(LOCATION_SpecialPariahsEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10058030).AddGroup(GROUP_BROK_Rogues, 2, 6).AddGroup(GROUP_RED_Wolves, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(20, 10058130).AddGroup(GROUP_BROK_Rogues, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058140).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058150).AddGroup(GROUP_DMRV_Scorpions, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058160).AddGroup(GROUP_ARRO_Spore_Plants, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10058170).AddGroup(GROUP_BROK_Unity_Patrol, 6, 10).AddGroup(GROUP_BROK_Rogues, 3, 6).Fighting(0, 1);
table.AddEncounter(5, 10058180).AddGroup(GROUP_BROK_Unity_Patrol, 5, 8).AddGroup(GROUP_RED_Wolves, 8, 12).Fighting(0, 1);
table.AddEncounter(15, 10058190).AddGroup(GROUP_BROK_Unity_Patrol, 8, 10);
table.AddEncounter(1, 10058200).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10058220).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10058240).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Brok_M
table = new EncounterTables(TABLE_Brok_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CityEncounter1);
table.AddLocationPid(LOCATION_CityEncounter2);
table.AddLocationPid(LOCATION_CityEncounter3);
table.AddEncounter(10, 10058500).AddGroup(GROUP_BROK_Rogues, 2, 6).AddGroup(GROUP_RED_Wolves, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(20, 10058510).AddGroup(GROUP_BROK_Rogues, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058520).AddGroup(GROUP_RED_Wolves, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058530).AddGroup(GROUP_DMRV_Scorpions, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10058630).AddGroup(GROUP_ARRO_Spore_Plants, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10058640).AddGroup(GROUP_BROK_Unity_Patrol, 6, 10).AddGroup(GROUP_BROK_Rogues, 3, 6).Fighting(0, 1);
table.AddEncounter(5, 10058650).AddGroup(GROUP_BROK_Unity_Patrol, 5, 8).AddGroup(GROUP_RED_Wolves, 8, 12).Fighting(0, 1);
table.AddEncounter(20, 10058660).AddGroup(GROUP_BROK_Unity_Patrol, 8, 12);
table.AddEncounter(1, 10058680).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Fran_O
table = new EncounterTables(TABLE_Fran_O);
table.AddLocationPid(LOCATION_CoastEncounter7);
table.AddLocationPid(LOCATION_CoastEncounter8);
table.AddLocationPid(LOCATION_CoastEncounter10);
table.AddLocationPid(LOCATION_CoastEncounter5);
table.AddLocationPid(LOCATION_CoastEncounter11);
table.AddLocationPid(LOCATION_CoastEncounter3);
table.AddEncounter(7, 10059000).AddGroup(GROUP_FRAN_Mercenaries, 2, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059010).AddGroup(GROUP_FRAN_Press_Gang, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(99, 10059010).AddGroup(GROUP_FRAN_Press_Gang, 4, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_bh_super_new_technology, '=', 2).CheckLVar(LVAR_bh_dead_saboteurs_counter, '<', 40);
table.AddEncounter(7, 10059020).AddGroup(GROUP_EPA_Deathclaws, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059030).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059130).AddGroup(GROUP_EPA_Tough_Alien, 10, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10059140).AddGroup(GROUP_FRAN_Elronologists, 2, 8).AddGroup(GROUP_FRAN_Mercenaries, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(1, 2).Fighting(0, 2);
table.AddEncounter(10, 10059150).AddGroup(GROUP_FRAN_Elronologists, 2, 8).AddGroup(GROUP_FRAN_Press_Gang, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(1, 2).Fighting(0, 2);
table.AddEncounter(10, 10059040).AddGroup(GROUP_FRAN_Elronologists, 2, 8).AddGroup(GROUP_SF_Shi, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10059050).AddGroup(GROUP_EPA_Tough_Alien, 6, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_SF_Shi, 3, 5).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(7, 10059060).AddGroup(GROUP_EPA_Tough_Alien, 5, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_FRAN_Elronologists, 2, 6).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(7, 10059070).AddGroup(GROUP_EPA_Deathclaws, 3, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_FRAN_Mercenaries, 2, 6).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(10, 10059160).AddGroup(GROUP_FRAN_Elronologists, 2, 5);
table.AddEncounter(40, 10059170).AddGroup(GROUP_SF_Mirelurk, 10, 12).AddGroup(GROUP_Player, 0, 0).CheckGVar(GVAR_sf_invasion_status, '>', 0).Fighting(0, 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(35, 10059180).LocationPid(LOCATION_Quest_Sid_And_Nancy).CheckLVar(LVAR_q_sf_slim_sidnancy, '=', 2).AssignLVar(LVAR_q_sf_slim_sidnancy, '=', 3);

// Fran_M
table = new EncounterTables(TABLE_Fran_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CityEncounter4);
table.AddLocationPid(LOCATION_CityEncounter5);
table.AddEncounter(10, 10059500).AddGroup(GROUP_FRAN_Mercenaries, 2, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10059510).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(99, 10059010).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_bh_super_new_technology, '=', 2).CheckLVar(LVAR_bh_dead_saboteurs_counter, '<', 40);
table.AddEncounter(7, 10059520).AddGroup(GROUP_EPA_Deathclaws, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059530).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059630).AddGroup(GROUP_EPA_Tough_Alien, 7, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10059540).AddGroup(GROUP_EPA_Tough_Alien, 6, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_SF_Shi, 3, 4).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(7, 10059550).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_FRAN_Elronologists, 3, 4).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(7, 10059560).AddGroup(GROUP_FRAN_Press_Gang, 3, 4).AddGroup(GROUP_SF_Shi, 2, 8).AddGroup(GROUP_FRAN_Elronologists, 6, 8).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(7, 10059640).AddGroup(GROUP_FRAN_Elronologists, 2, 6).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10059650).AddGroup(GROUP_FRAN_Elronologists, 2, 8).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10059660).AddGroup(GROUP_FRAN_Elronologists, 2, 5);
table.AddEncounter(5, 10059670).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10059680).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Fran_C
table = new EncounterTables(TABLE_Fran_C);
table.AddLocationPid(LOCATION_CityEncounter1);
table.AddLocationPid(LOCATION_CityEncounter2);
table.AddLocationPid(LOCATION_CityEncounter3);
table.AddLocationPid(LOCATION_CityEncounter4);
table.AddLocationPid(LOCATION_CityEncounter5);
table.AddLocationPid(LOCATION_CityEncounter6);
table.AddLocationPid(LOCATION_CityEncounter7);
table.AddLocationPid(LOCATION_CityEncounter8);
table.AddEncounter(12, 10060000).AddGroup(GROUP_FRAN_Mercenaries, 2, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10060010).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(99, 10059010).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_bh_super_new_technology, '=', 2).CheckLVar(LVAR_bh_dead_saboteurs_counter, '<', 40);
table.AddEncounter(3, 10060020).AddGroup(GROUP_EPA_Deathclaws, 6, 10).AddGroup(GROUP_EPA_Mar, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(7, 10060030).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10060130).AddGroup(GROUP_EPA_Tough_Alien, 10, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10060140).AddGroup(GROUP_FRAN_Elronologists, 2, 5).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(10, 10060150).AddGroup(GROUP_FRAN_Elronologists, 2, 5).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).Fighting(0, 1);
table.AddEncounter(15, 10060160).AddGroup(GROUP_FRAN_Elronologists, 2, 5);
table.AddEncounter(7, 10059540).AddGroup(GROUP_EPA_Tough_Alien, 6, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_SF_Shi, 3, 4).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(40, 10059170).AddGroup(GROUP_SF_Mirelurk, 10, 12).AddGroup(GROUP_Player, 0, 0).CheckGVar(GVAR_sf_invasion_status, '>', 0).Fighting(0, 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Fran_D
table = new EncounterTables(TABLE_Fran_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddEncounter(12, 10060530).AddGroup(GROUP_FRAN_Mercenaries, 2, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(12, 10060630).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(99, 10059010).AddGroup(GROUP_FRAN_Press_Gang, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_bh_super_new_technology, '=', 2).CheckLVar(LVAR_bh_dead_saboteurs_counter, '<', 40);
table.AddEncounter(7, 10060640).AddGroup(GROUP_EPA_Deathclaws, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10060650).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10060660).AddGroup(GROUP_EPA_Tough_Alien, 10, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(7, 10060670).AddGroup(GROUP_FRAN_Elronologists, 2, 5).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(7, 10060680).AddGroup(GROUP_FRAN_Elronologists, 2, 8).AddGroup(GROUP_FRAN_Press_Gang, 3, 7).Fighting(0, 1);
table.AddEncounter(10, 10059540).AddGroup(GROUP_EPA_Tough_Alien, 6, 12).AddGroup(GROUP_Player, 0, 0).AddGroup(GROUP_SF_Shi, 3, 4).Fighting(0, 1).Fighting(0, 2);
table.AddEncounter(12, 10060690).AddGroup(GROUP_FRAN_Elronologists, 2, 5);
table.AddEncounter(1, 10060700).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10060740).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10060770).Special(true).LocationPid(LOCATION_SpecialCafeEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_gecko_find_woody, '<', 1).AssignLVar(LVAR_gecko_find_woody, '=', 1);
table.AddEncounter(40, 10059170).AddGroup(GROUP_SF_Mirelurk, 10, 12).AddGroup(GROUP_Player, 0, 0).CheckGVar(GVAR_sf_invasion_status, '>', 0).Fighting(0, 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Fran2_D
table = new EncounterTables(TABLE_Fran2_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddEncounter(2, 10061000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10061030).AddGroup(GROUP_FRAN_Mercenaries, 2, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10061130).AddGroup(GROUP_EPA_Deathclaws, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10061140).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 8, 12);
table.AddEncounter(10, 10061150).AddGroup(GROUP_EPA_Tough_Alien, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10061160).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 3, 4).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061170).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 6).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061180).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 2, 6).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061190).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4).AddGroup(GROUP_EPA_Tough_Alien, 3, 6).Fighting(0, 1);
table.AddEncounter(8, 10061200).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 2, 6);
table.AddEncounter(12, 10061210).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 6);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Fran2_C
table = new EncounterTables(TABLE_Fran2_C);
table.AddLocationPid(LOCATION_CityEncounter1);
table.AddLocationPid(LOCATION_CityEncounter2);
table.AddLocationPid(LOCATION_CityEncounter3);
table.AddLocationPid(LOCATION_CityEncounter4);
table.AddLocationPid(LOCATION_CityEncounter5);
table.AddLocationPid(LOCATION_CityEncounter6);
table.AddLocationPid(LOCATION_CityEncounter7);
table.AddLocationPid(LOCATION_CityEncounter8);
table.AddEncounter(10, 10061500).AddGroup(GROUP_FRAN_Mercenaries, 3, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10061510).AddGroup(GROUP_EPA_Deathclaws, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10061520).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 4, 8);
table.AddEncounter(10, 10061530).AddGroup(GROUP_EPA_Tough_Alien, 5, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(3, 10061630).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 2, 4).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061640).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 4).AddGroup(GROUP_FRAN_Mercenaries, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061650).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 4, 6).AddGroup(GROUP_EPA_Tough_Fire_Geckos, 3, 6).Fighting(0, 1);
table.AddEncounter(3, 10061660).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 6).AddGroup(GROUP_EPA_Tough_Alien, 3, 6).Fighting(0, 1);
table.AddEncounter(10, 10061670).AddGroup(GROUP_FRAN2_San_Fran_Caravan, 4, 4);
table.AddEncounter(10, 10061680).AddGroup(GROUP_DNRV_Redding_Caravan, 4, 4);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Wild5_D
table = new EncounterTables(TABLE_Wild5_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter13);
table.AddEncounter(2, 10062000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(1, 10062030).AddGroup(GROUP_NAV_Enclave_Patrol, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10062130).AddGroup(GROUP_NCR_Masters_Army, 4, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10062040).AddGroup(GROUP_NCR_Masters_Army, 4, 9).AddGroup(GROUP_BS_Patrol_Ligt, 4, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(20, 10062140).AddGroup(GROUP_EPA_Deathclaws, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(35, 10062150).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10062160).Special(true).LocationPid(LOCATION_SpecialWhaleEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_whale, '<', 1).AssignLVar(LVAR_special_encounter_whale, '=', 1);
table.AddEncounter(1, 10062200).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(1, 10053210).Special(true).LocationPid(LOCATION_SpecialSoldierHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_soldier_holo, '=', 0).AssignLVar(LVAR_special_soldier_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// Wild5_M
table = new EncounterTables(TABLE_Wild5_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddEncounter(1, 10062500).AddGroup(GROUP_NAV_Enclave_Patrol, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10062510).AddGroup(GROUP_NCR_Masters_Army, 4, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10062520).AddGroup(GROUP_EPA_Deathclaws, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(35, 10062530).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10062640).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// NRNR_D
table = new EncounterTables(TABLE_NRNR_D);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter9);
table.AddLocationPid(LOCATION_DesertEncounter10);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(2, 10063000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(3, 10063030).AddGroup(GROUP_NCR_Caravan, 4, 8).AddGroup(GROUP_NCR_Masters_Army, 4, 6).Fighting(0, 1);
table.AddEncounter(3, 10063130).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 5).AddGroup(GROUP_NCR_Masters_Army, 4, 6).Fighting(0, 1);
table.AddEncounter(1, 10063140).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 5).AddGroup(GROUP_EPA_Deathclaws, 3, 6).Fighting(0, 1);
table.AddEncounter(13, 10063150).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 5);
table.AddEncounter(13, 10063160).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(13, 10063170).AddGroup(GROUP_NCR_Caravan, 6, 10).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(1, 10063200).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// NRNR_M
table = new EncounterTables(TABLE_NRNR_M);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter3);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_CityEncounter7);
table.AddLocationPid(LOCATION_CityEncounter8);
table.AddEncounter(3, 10063500).AddGroup(GROUP_NCR_Caravan, 4, 6).AddGroup(GROUP_NCR_Masters_Army, 4, 8).Fighting(0, 1);
table.AddEncounter(3, 10063510).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_NCR_Masters_Army, 4, 8).Fighting(0, 1);
table.AddEncounter(1, 10063520).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4).AddGroup(GROUP_EPA_Deathclaws, 3, 6).Fighting(0, 1);
table.AddEncounter(13, 10063530).AddGroup(GROUP_DNRV_Redding_Caravan, 3, 4);
table.AddEncounter(13, 10063630).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(13, 10063640).AddGroup(GROUP_NCR_Caravan, 6, 10).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(5, 10080430).AddGroup(GROUP_Manti, 1, 1);

// Wild6_M
table = new EncounterTables(TABLE_Wild6_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddEncounter(33, 10064000).AddGroup(GROUP_RED_Wolves, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(33, 10064010).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(33, 10064020).AddGroup(GROUP_DMRV_Scorpions, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10080100).Special(true).LocationPid(LOCATION_Lost_Town).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// Wild6_D
table = new EncounterTables(TABLE_Wild6_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(2, 10064500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(25, 10064530).AddGroup(GROUP_RED_Wolves, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(25, 10064630).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(25, 10064640).AddGroup(GROUP_DMRV_Scorpions, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10064670).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10064730).Special(true).LocationPid(LOCATION_SpecialSoldierHolo).CheckParam(SK_OUTDOORSMAN, '>', 119).CheckLVar(LVAR_special_soldier_holo, '=', 0).AssignLVar(LVAR_special_soldier_holo, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);


// VNNB_D
table = new EncounterTables(TABLE_VNNB_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter16);
table.AddEncounter(1, 10065000).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10065030).AddGroup(GROUP_NCR_Marauders, 4, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10065130).AddGroup(GROUP_RED_Wolves, 8, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(5, 10065140).AddGroup(GROUP_DMRV_Scorpions, 2, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10065150).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3).AddGroup(GROUP_NCR_Marauders, 3, 6).Fighting(0, 1);
table.AddEncounter(15, 10065160).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_NCR_Marauders, 3, 6).Fighting(0, 1);
table.AddEncounter(1, 10065170).AddGroup(GROUP_NCR_Caravan, 4, 6).AddGroup(GROUP_RED_Wolves, 4, 8).Fighting(0, 1);
table.AddEncounter(5, 10065180).AddGroup(GROUP_V15_Caravan, 4, 6).AddGroup(GROUP_DMRV_Scorpions, 4, 9).Fighting(0, 1);
table.AddEncounter(5, 10065190).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3);
table.AddEncounter(5, 10065200).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(5, 10065210).AddGroup(GROUP_NCR_Caravan, 5, 10).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(5, 10065220).AddGroup(GROUP_V15_Caravan, 4, 9);
table.AddEncounter(5, 10065230).AddGroup(GROUP_NEW_Traveller, 1, 2);
table.AddEncounter(1, 10065260).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(1, 10065280).Special(true).LocationPid(LOCATION_SpecialHolyEncounter1).CheckParam(ST_LEVEL, '>', 9).CheckLVar(LVAR_special_encounter_holy1, '<', 1).AssignLVar(LVAR_special_encounter_holy1, '=', 1);
table.AddEncounter(2, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_NCR_Caravan, 5, 10).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_V15_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(2, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 5, 10).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_V15_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(2, 10080430).AddGroup(GROUP_Manti, 1, 1);

// VNNB_M
table = new EncounterTables(TABLE_VNNB_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddEncounter(10, 10065500).AddGroup(GROUP_NCR_Marauders, 3, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10065510).AddGroup(GROUP_RED_Wolves, 8, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10065520).AddGroup(GROUP_DMRV_Scorpions, 2, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10065530).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3).AddGroup(GROUP_NCR_Marauders, 3, 6).Fighting(0, 1);
table.AddEncounter(10, 10065630).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_NCR_Marauders, 3, 6).Fighting(0, 1);
table.AddEncounter(8, 10065640).AddGroup(GROUP_NCR_Caravan, 4, 6).AddGroup(GROUP_RED_Wolves, 6, 8).Fighting(0, 1);
table.AddEncounter(10, 10065650).AddGroup(GROUP_V15_Caravan, 2, 4).AddGroup(GROUP_DMRV_Scorpions, 4, 9).Fighting(0, 1);
table.AddEncounter(5, 10065660).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 3, 3);
table.AddEncounter(5, 10065670).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4);
table.AddEncounter(5, 10065680).AddGroup(GROUP_NCR_Caravan, 5, 10).CheckGVar(GVAR_ncr_siege_camps_num, '<', 1);
table.AddEncounter(5, 10065690).AddGroup(GROUP_V15_Caravan, 2, 4);
table.AddEncounter(8, 10065700).AddGroup(GROUP_NEW_Traveller, 1, 2);
table.AddEncounter(2, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_NCR_Caravan, 5, 10).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_V15_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(2, 10080110).Special(true).LocationPid(LOCATION_Karavan).AddGroup(GROUP_RDRC_Broken_Hills_Caravan, 5, 10).AddGroup(GROUP_DNRV_Reno_Caravan, 3, 4).AddGroup(GROUP_V15_Caravan, 4, 6).CheckParam(ST_LEVEL, '>', 16).CheckGVar(GVAR_lost_town_v, '<', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);
table.AddEncounter(2, 10080430).AddGroup(GROUP_Manti, 1, 1);

// NCR_M
table = new EncounterTables(TABLE_NCR_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddLocationPid(LOCATION_MountainEncounter5);
table.AddLocationPid(LOCATION_MountainEncounter6);
table.AddLocationPid(LOCATION_MountainEncounter4);
table.AddEncounter(5, 10066000).AddGroup(GROUP_NCR_Masters_Army, 4, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10066010).AddGroup(GROUP_NCR_Marauders, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10066020).AddGroup(GROUP_NCR_Rangers, 3, 7).AddGroup(GROUP_NCR_Masters_Army, 4, 6).Fighting(0, 1);
table.AddEncounter(25, 10066030).AddGroup(GROUP_NCR_Rangers, 5, 10).AddGroup(GROUP_NCR_Marauders, 4, 9).Fighting(0, 1);
table.AddEncounter(2, 10066130).AddGroup(GROUP_KLA_Farmers, 2, 6).AddGroup(GROUP_NCR_Masters_Army, 5, 9).Fighting(0, 1);
table.AddEncounter(15, 10066140).AddGroup(GROUP_KLA_Farmers, 3, 6).AddGroup(GROUP_NCR_Marauders, 6, 9).Fighting(0, 1);
table.AddEncounter(15, 10066150).AddGroup(GROUP_NCR_Rangers, 6, 10);
table.AddEncounter(10, 10066160).AddGroup(GROUP_KLA_Farmers, 3, 5);
table.AddEncounter(60, 10066190).AddGroup(GROUP_NCR_Patrol_Raiders, 3, 6).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(40, 10066200).AddGroup(GROUP_NCR_Patrol_Rebels, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(1, 10066180).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// NCR_D
table = new EncounterTables(TABLE_NCR_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter4);
table.AddLocationPid(LOCATION_DesertEncounter5);
table.AddLocationPid(LOCATION_DesertEncounter6);
table.AddLocationPid(LOCATION_DesertEncounter11);
table.AddLocationPid(LOCATION_DesertEncounter15);
table.AddEncounter(2, 10066500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
table.AddEncounter(10, 10066530).AddGroup(GROUP_NCR_Masters_Army, 5, 7).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(15, 10066630).AddGroup(GROUP_NCR_Marauders, 6, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(2, 10066640).AddGroup(GROUP_NCR_Rangers, 5, 9).AddGroup(GROUP_NCR_Masters_Army, 4, 6).Fighting(0, 1);
table.AddEncounter(20, 10066650).AddGroup(GROUP_NCR_Rangers, 5, 10).AddGroup(GROUP_NCR_Marauders, 4, 9).Fighting(0, 1);
table.AddEncounter(2, 10066660).AddGroup(GROUP_KLA_Farmers, 2, 6).AddGroup(GROUP_NCR_Masters_Army, 5, 9).Fighting(0, 1);
table.AddEncounter(15, 10066670).AddGroup(GROUP_KLA_Farmers, 3, 6).AddGroup(GROUP_NCR_Marauders, 6, 9).Fighting(0, 1);
table.AddEncounter(15, 10066680).AddGroup(GROUP_NCR_Rangers, 6, 10);
table.AddEncounter(15, 10066690).AddGroup(GROUP_KLA_Farmers, 3, 5);
table.AddEncounter(1, 10066720).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(50, 10066190).AddGroup(GROUP_NCR_Patrol_Raiders, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(30, 10066200).AddGroup(GROUP_NCR_Patrol_Rebels, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// V15_M
table = new EncounterTables(TABLE_V15_M);
table.AddLocationPid(LOCATION_MountainEncounter1);
table.AddLocationPid(LOCATION_MountainEncounter2);
table.AddEncounter(99, 10080440).LocationPid(LOCATION_Quest_V15_Enclave).CheckLVar(LVAR_q_enclave_patrol, '=', 2);
table.AddEncounter(99, 10080440).LocationPid(LOCATION_Quest_V15_Mut).CheckLVar(LVAR_q_ncr_caravan, '=', 1);
table.AddEncounter(99, 10067750).LocationPid(LOCATION_Quest_Dappo_Lost_Caravan).CheckLVar(LVAR_ncr_dappo_lost_c_status, '=', 3).AssignLVar(LVAR_ncr_dappo_lost_c_status, '=', 4);
//table.AddEncounter(  0, 10067000 ).AddGroup( GROUP_NCR_Masters_Army, 5, 9 ).AddGroup( GROUP_WILD2_Mutated_Molerats, 8, 12 ).Fighting( 0, 1 );
table.AddEncounter(8, 10067010).AddGroup(GROUP_NCR_Masters_Army, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(8, 10067040).AddGroup(GROUP_NCR_Masters_Army, 4, 8).AddGroup(GROUP_BS_Patrol, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(20, 10067020).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 10).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(10, 10067030).AddGroup(GROUP_WILD2_Mutated_Molerats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(4, 10067130).AddGroup(GROUP_BS_Patrol_Ligt, 3, 4);
table.AddEncounter(40, 10066190).AddGroup(GROUP_NCR_Patrol_Raiders, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(20, 10066200).AddGroup(GROUP_NCR_Patrol_Rebels, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(1, 10067150).Special(true).LocationPid(LOCATION_SpecialHolyEncounter2).CheckGVar(GVAR_holy_global, '<', 1).CheckParam(ST_LEVEL, '>', 28).CheckLVar(LVAR_special_encounter_holy1, '>', 0).CheckLVar(LVAR_special_encounter_holy2, '<', 1).AssignLVar(LVAR_special_encounter_holy2, '=', 1);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// V15_D
table = new EncounterTables(TABLE_V15_D);
table.AddLocationPid(LOCATION_DesertEncounter1);
table.AddLocationPid(LOCATION_DesertEncounter2);
table.AddLocationPid(LOCATION_DesertEncounter3);
table.AddLocationPid(LOCATION_DesertEncounter14);
table.AddEncounter(99, 10080440).LocationPid(LOCATION_Quest_V15_Enclave).CheckLVar(LVAR_q_enclave_patrol, '=', 2);
table.AddEncounter(99, 10080440).LocationPid(LOCATION_Quest_V15_Mut).CheckLVar(LVAR_q_ncr_caravan, '=', 1);
table.AddEncounter(99, 10067750).LocationPid(LOCATION_Quest_Dappo_Lost_Caravan).CheckLVar(LVAR_ncr_dappo_lost_c_status, '=', 3).AssignLVar(LVAR_ncr_dappo_lost_c_status, '=', 4);
table.AddEncounter(2, 10067500).Special(true).LocationPid(LOCATION_SpecialToxicEncounter).CheckParam(ST_LEVEL, '>', 5).CheckLVar(LVAR_special_encounter_toxic, '<', 1).AssignLVar(LVAR_special_encounter_toxic, '=', 1);
//table.AddEncounter(  0, 10067530 ).AddGroup( GROUP_NCR_Masters_Army, 5, 9 ).AddGroup( GROUP_WILD2_Mutated_Molerats, 8, 12 ).Fighting( 0, 1 );
table.AddEncounter(8, 10067630).AddGroup(GROUP_NCR_Masters_Army, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10067640).AddGroup(GROUP_DVMV_Mantis_Swarm, 8, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10067650).AddGroup(GROUP_WILD2_Mutated_Molerats, 4, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(20, 10067660).AddGroup(GROUP_DMRV_Scorpions, 6, 12).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1);
table.AddEncounter(1, 10067690).Special(true).LocationPid(LOCATION_SpecialShuttleEncounter).CheckParam(ST_LEVEL, '>', 26).CheckLVar(LVAR_special_encounter_shuttle, '<', 1).AssignLVar(LVAR_special_encounter_shuttle, '=', 1);
table.AddEncounter(40, 10066190).AddGroup(GROUP_NCR_Patrol_Raiders, 3, 8).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(20, 10066200).AddGroup(GROUP_NCR_Patrol_Rebels, 6, 9).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckLVar(LVAR_q_ncr_hate_patrol, '=', 2);
table.AddEncounter(4, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 10);

// OSTROV_VAULT_A
table = new EncounterTables(TABLE_VAULT_A);
table.AddLocationPid(LOCATION_DesertEncounter1_v);
table.AddLocationPid(LOCATION_DesertEncounter2_v);
table.AddLocationPid(LOCATION_DesertEncounter3_v);
table.AddLocationPid(LOCATION_DesertEncounter4_v);
table.AddLocationPid(LOCATION_DesertEncounter5_v);
table.AddLocationPid(LOCATION_DesertEncounter6_v);
table.AddLocationPid(LOCATION_DesertEncounter7_v);
table.AddLocationPid(LOCATION_DesertEncounter8_v);
table.AddLocationPid(LOCATION_DesertEncounter9_v);
table.AddLocationPid(LOCATION_DesertEncounter10_v);
table.AddLocationPid(LOCATION_DesertEncounter11_v);
table.AddLocationPid(LOCATION_DesertEncounter12_v);
table.AddLocationPid(LOCATION_DesertEncounter13_v);
table.AddLocationPid(LOCATION_DesertEncounter14_v);
table.AddLocationPid(LOCATION_DesertEncounter15_v);
table.AddLocationPid(LOCATION_DesertEncounter16_v);
// table.AddLocationPid( LOCATION_MountainEncounter1 );
// table.AddLocationPid( LOCATION_MountainEncounter2 );
// table.AddLocationPid( LOCATION_MountainEncounter3 );
// table.AddLocationPid( LOCATION_MountainEncounter4 );
// table.AddLocationPid( LOCATION_MountainEncounter5 );
// table.AddLocationPid( LOCATION_MountainEncounter6 );
// table.AddLocationPid( LOCATION_CavernEncounter0 );
// table.AddLocationPid( LOCATION_CavernEncounter1 );
// table.AddLocationPid( LOCATION_CavernEncounter2 );
// table.AddLocationPid( LOCATION_CavernEncounter3 );
// table.AddLocationPid( LOCATION_CavernEncounter4 );
// table.AddLocationPid( LOCATION_CavernEncounter5 );
table.AddEncounter(25, 10034650).StartLocation(true).AddGroup(GROUP_VAULT_Golden_Geckos, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10040660).StartLocation(true).AddGroup(GROUP_VAULT_Mantis, 5, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 5).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(25, 10030510).StartLocation(true).AddGroup(GROUP_VAULT_Mantis, 5, 8).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10034650).StartLocation(true).AddGroup(GROUP_VAULT_Golden_Geckos, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10040660).StartLocation(true).AddGroup(GROUP_VAULT_Mantis, 5, 8).AddGroup(GROUP_ARRO_Spore_Plants, 2, 5).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(25, 10030510).StartLocation(true).AddGroup(GROUP_VAULT_Mantis, 5, 8).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10040160).StartLocation(true).AddGroup(GROUP_VAULT_Dog, 6, 10).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10034160).StartLocation(true).AddGroup(GROUP_VAULT_Rat, 6, 10).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10039740).StartLocation(true).AddGroup(GROUP_VAULT_Brahmins, 5, 8).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10033180).StartLocation(true).AddGroup(GROUP_VAULT_Ant, 3, 5).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10034690).StartLocation(true).AddGroup(GROUP_VAULT_Molerats, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10045660).StartLocation(true).AddGroup(GROUP_VAULT_Golden_Geckos, 2, 4).AddGroup(GROUP_ARRO_Spore_Plants, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 2).Fighting(1, 2);
table.AddEncounter(25, 10045830).StartLocation(true).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_ARRO_Cannibals, 4, 5).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10045840).StartLocation(true).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_KLAD_Scorpions, 7, 8).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10045850).StartLocation(true).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(25, 10036770).StartLocation(true).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 6, 10).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(25, 10035810).StartLocation(true).AddGroup(GROUP_VAULT_FarmerPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(25, 10030000).StartLocation(true).AddGroup(GROUP_VAULT_RaiderPatrol, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 8).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(25, 10047160).StartLocation(true).AddGroup(GROUP_VAULT_RaiderAtackPatrol, 3, 5).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).CheckParam(ST_LEVEL, '>', 6).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(25, 10034650).StartLocation(true).AddGroup(GROUP_VAULT_Golden_Geckos, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(1, 10045830).StartLocation(false).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_ARRO_Cannibals, 4, 5).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(1, 10045840).StartLocation(false).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_KLAD_Scorpions, 7, 8).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(1, 10045850).StartLocation(false).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(1, 10036770).StartLocation(false).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_KLAD_Mole_Pig_Rat, 6, 10).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(1, 10035810).StartLocation(false).AddGroup(GROUP_VAULT_FarmerPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(1, 10030000).StartLocation(false).AddGroup(GROUP_VAULT_RaiderPatrol, 2, 5).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).CheckParam(ST_LEVEL, '>', 8).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(1, 10047160).StartLocation(false).AddGroup(GROUP_VAULT_RaiderAtackPatrol, 3, 5).AddGroup(GROUP_VAULT_BarterPatrol, 3, 3).AddGroup(GROUP_Player, 0, 0).Fighting(0, 1).Fighting(0, 2).CheckParam(ST_LEVEL, '>', 6).CheckParam(ST_LEVEL, '<', 28);
table.AddEncounter(1, 10034650).StartLocation(false).AddGroup(GROUP_VAULT_Golden_Geckos, 2, 4).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '<', 28).Fighting(0, 1);
table.AddEncounter(10, 10080420).LocationPid(LOCATION_Cave).AddGroup(GROUP_Player, 0, 0).CheckParam(ST_LEVEL, '>', 5);


// Ocean1_O
table = new EncounterTables(TABLE_Ocean1_O);
table.AddLocationPid(LOCATION_OceanEncounter1);
table.AddLocationPid(LOCATION_OceanEncounter2);
table.AddLocationPid(LOCATION_OceanEncounter3);
// table.AddEncounter(25, 117131).StartLocation(false).AddGroup(GROUP_Player, 0, 0);

// Ocean2_O
table = new EncounterTables(TABLE_Ocean2_O);
table.AddLocationPid(LOCATION_OceanEncounter1);
table.AddLocationPid(LOCATION_OceanEncounter2);
table.AddLocationPid(LOCATION_OceanEncounter3);
// table.AddEncounter(25, 117131).StartLocation(false).AddGroup(GROUP_Player, 0, 0);



// All of the Tile information:

////SetZone( 0, 0, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare      );
SetZone(0, 0, TABLE_Arro_O, 60, TERRAIN_Mountain, CHANCE_Forced);
//SetZone( 0, 1, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_None      );
////SetZone( 0, 1, TABLE_VAULT_A, 60, TERRAIN_Mountain, CHANCE_Frequent      );
SetZone(0, 2, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 3, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 4, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 5, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 6, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 7, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 7, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(0, 8, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 8, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(0, 9, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 9, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Common);
SetZone(0, 10, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 10, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Common);
SetZone(0, 11, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 12, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 13, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 14, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 15, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 16, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 17, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 18, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 19, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 20, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(0, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

////SetZone( 1, 0, TABLE_Fish_O, 0, TERRAIN_Mountain, CHANCE_Frequent  );
//SetZone( 1, 0, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_None      );
////SetZone( 1, 1, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Uncommon  );
//SetZone( 1, 1, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_None      );
SetZone(1, 2, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 2, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(1, 3, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 3, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(1, 4, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 4, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(1, 5, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 5, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(1, 6, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 6, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(1, 7, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 7, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(1, 8, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(1, 9, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(1, 10, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 10, TABLE_Fish_O, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(1, 11, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 11, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Common);
SetZone(1, 12, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 13, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 14, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 15, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 16, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 17, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 18, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 19, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 20, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(1, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(2, 0, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(2, 1, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 1, TABLE_Arro_O, 0, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(2, 2, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(2, 3, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(2, 4, TABLE_Arro_M, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(2, 5, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(2, 6, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(2, 7, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(2, 8, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(2, 9, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(2, 10, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(2, 11, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 11, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Common);
SetZone(2, 12, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 12, TABLE_Fish_O, -40, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(2, 13, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 13, TABLE_Fish_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(2, 14, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 14, TABLE_Nav_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(2, 15, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 15, TABLE_Nav_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(2, 16, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 16, TABLE_Nav_O, 0, TERRAIN_Coast, CHANCE_Rare);
SetZone(2, 17, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 18, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 19, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 20, TABLE_Ocean1_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(2, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(3, 0, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 1, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(3, 2, TABLE_Arro_D, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(3, 3, TABLE_Arro_D, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(3, 4, TABLE_Arro_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(3, 5, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 6, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(3, 7, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(3, 8, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(3, 9, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 10, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 11, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 12, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 13, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(3, 14, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(3, 15, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(3, 16, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 16, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(3, 17, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 17, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(3, 18, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 18, TABLE_Nav_O, -25, TERRAIN_Coast, CHANCE_Common);
SetZone(3, 19, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 20, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(3, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(4, 0, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 1, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(4, 2, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(4, 3, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(4, 4, TABLE_Arro_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(4, 5, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 6, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 7, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 8, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 9, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 10, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(4, 11, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 12, TABLE_Prim_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(4, 13, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(4, 14, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(4, 15, TABLE_Nav_D, -40, TERRAIN_Desert, CHANCE_Common);
SetZone(4, 16, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(4, 17, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(4, 18, TABLE_Nav_M, -25, TERRAIN_Mountain, CHANCE_Common);
SetZone(4, 19, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 19, TABLE_Nav_O, -25, TERRAIN_Coast, CHANCE_Common);
SetZone(4, 20, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 20, TABLE_Nav_O, 0, TERRAIN_Coast, CHANCE_Common);
SetZone(4, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(4, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(5, 0, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 1, TABLE_Arro_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(5, 2, TABLE_Arrok_D, 0, TERRAIN_Desert, CHANCE_Rare);
SetZone(5, 3, TABLE_Arro_M, 0, TERRAIN_Desert, CHANCE_Rare);
SetZone(5, 4, TABLE_Arro_D, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 5, TABLE_Arro_D, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 6, TABLE_Arro_D, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 7, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(5, 8, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(5, 9, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 10, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 11, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(5, 12, TABLE_Prim_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(5, 13, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(5, 14, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(5, 15, TABLE_Nav_D, -40, TERRAIN_Desert, CHANCE_Common);
SetZone(5, 16, TABLE_Nav_D, -40, TERRAIN_Desert, CHANCE_Common);
SetZone(5, 17, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(5, 18, TABLE_Nav_D, -25, TERRAIN_Desert, CHANCE_Common);
SetZone(5, 19, TABLE_Nav_M, -25, TERRAIN_Mountain, CHANCE_Common);
SetZone(5, 20, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 20, TABLE_Nav_O, -25, TERRAIN_Coast, CHANCE_Common);
SetZone(5, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 21, TABLE_Nav_O, -25, TERRAIN_Coast, CHANCE_Common);
SetZone(5, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(5, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(6, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 1, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 2, TABLE_Arrok_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(6, 3, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 4, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 5, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 6, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 7, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 8, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 9, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 10, TABLE_Prim_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(6, 11, TABLE_Prim_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 12, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 13, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(6, 14, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(6, 15, TABLE_Nav_D, -40, TERRAIN_Desert, CHANCE_Common);
SetZone(6, 16, TABLE_Nav_D, -40, TERRAIN_Desert, CHANCE_Common);
SetZone(6, 17, TABLE_Nav_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(6, 18, TABLE_Nav_D, -25, TERRAIN_Desert, CHANCE_Common);
SetZone(6, 19, TABLE_Nav_D, -25, TERRAIN_Desert, CHANCE_Common);
SetZone(6, 20, TABLE_Nav_M, -25, TERRAIN_Mountain, CHANCE_Common);
SetZone(6, 21, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 21, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(6, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 22, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(6, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 23, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(6, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(6, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(7, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 1, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 2, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Rare);
SetZone(7, 3, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 4, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 5, TABLE_Den_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 6, TABLE_Den_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 7, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 8, TABLE_Prim_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 9, TABLE_Prim_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 10, TABLE_Prim_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 11, TABLE_Prim_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 12, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 13, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 14, TABLE_Wild4_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 15, TABLE_Wild4_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 16, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 17, TABLE_Wild4_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 18, TABLE_Wild4_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 19, TABLE_Wild4_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(7, 20, TABLE_Wild4_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(7, 21, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(7, 22, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(7, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 23, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(7, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 24, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(7, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(7, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(8, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 1, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 2, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 3, TABLE_Klad_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 4, TABLE_Klad_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 5, TABLE_Den_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 6, TABLE_Den_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 7, TABLE_Den_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 8, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 9, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 10, TABLE_Prim_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 11, TABLE_Prim_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 12, TABLE_Prim_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 13, TABLE_Prim_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 14, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 15, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 16, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 17, TABLE_Wild4_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 18, TABLE_Wild4_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(8, 19, TABLE_Wild4_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 20, TABLE_Wild4_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(8, 21, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(8, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 22, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(8, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 23, TABLE_Vault, -100, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(8, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 24, TABLE_Fran_O, 0, TERRAIN_Coast, CHANCE_Common);
SetZone(8, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 25, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(8, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 26, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(8, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 27, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(8, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(8, 28, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(8, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);

SetZone(9, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(9, 1, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 2, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(9, 3, TABLE_Den_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 4, TABLE_Klad_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 5, TABLE_Den_D, 0, TERRAIN_Desert, CHANCE_Frequent);
SetZone(9, 6, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 7, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 8, TABLE_DNRV_M, -20, TERRAIN_Mountain, CHANCE_Common);
SetZone(9, 9, TABLE_DNRV_M, -20, TERRAIN_Mountain, CHANCE_Common);
SetZone(9, 10, TABLE_DNRV_M, -20, TERRAIN_Mountain, CHANCE_Common);
SetZone(9, 11, TABLE_Prim_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 12, TABLE_Prim_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 13, TABLE_Prim_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 14, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 15, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(9, 16, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(9, 17, TABLE_EPA_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(9, 18, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(9, 19, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(9, 20, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(9, 21, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(9, 22, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 22, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(9, 23, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 23, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(9, 24, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 24, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Uncommon);
SetZone(9, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 25, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(9, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 26, TABLE_Fran_C, -50, TERRAIN_City, CHANCE_Frequent);
SetZone(9, 27, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 27, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(9, 28, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 28, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);
SetZone(9, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(9, 29, TABLE_Fran_O, 0, TERRAIN_Coast, CHANCE_Rare);

SetZone(10, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 1, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 2, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 3, TABLE_DMRV_D, 0, TERRAIN_Desert, CHANCE_Common);
SetZone(10, 4, TABLE_DMRV_D, 0, TERRAIN_Desert, CHANCE_Common);
SetZone(10, 5, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 6, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 7, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 8, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 9, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(10, 10, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 11, TABLE_DNRV_D, -20, TERRAIN_Desert, CHANCE_Rare);
SetZone(10, 12, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 13, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 14, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 15, TABLE_Wild4_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 16, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(10, 17, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(10, 18, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(10, 19, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(10, 20, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(10, 21, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(10, 22, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(10, 23, TABLE_Fran_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(10, 24, TABLE_Fran_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(10, 25, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(10, 25, TABLE_Fran_C, -50, TERRAIN_City, CHANCE_Common);
SetZone(10, 26, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(10, 26, TABLE_Fran_C, -50, TERRAIN_City, CHANCE_Common);
SetZone(10, 27, TABLE_Fran_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(10, 28, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(10, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(10, 29, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);

SetZone(11, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 1, TABLE_Kla_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 2, TABLE_DMRV_D, 0, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 3, TABLE_DMRV_D, 0, TERRAIN_Desert, CHANCE_Common);
SetZone(11, 4, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 5, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 6, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 7, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 8, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 9, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 10, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(11, 11, TABLE_Red_M, -20, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 12, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 13, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 14, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 15, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 16, TABLE_EPA_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(11, 17, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(11, 18, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(11, 19, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(11, 20, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(11, 21, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(11, 22, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(11, 23, TABLE_Fran_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(11, 24, TABLE_Fran_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(11, 25, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(11, 26, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(11, 27, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(11, 28, TABLE_Fran2_C, -50, TERRAIN_City, CHANCE_Uncommon);
SetZone(11, 29, TABLE_Ocean2_O, 0, TERRAIN_Water, CHANCE_Rare);
SetZone(11, 29, TABLE_Fran_O, -50, TERRAIN_Coast, CHANCE_Rare);

SetZone(12, 0, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 1, TABLE_Kla_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 2, TABLE_DMRV_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 3, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 4, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 5, TABLE_Den_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 6, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 7, TABLE_Den_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 8, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 9, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(12, 10, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(12, 11, TABLE_Red_D, -20, TERRAIN_Desert, CHANCE_Rare);
SetZone(12, 12, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 13, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 14, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 15, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 16, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 17, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 18, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 19, TABLE_EPA_M, -50, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(12, 20, TABLE_EPA_M, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 21, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 22, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(12, 23, TABLE_Fran2_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 24, TABLE_Fran2_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 25, TABLE_Fran_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 26, TABLE_Fran_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 27, TABLE_Fran_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(12, 28, TABLE_Fran_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(12, 29, TABLE_Fran_C, -50, TERRAIN_City, CHANCE_Uncommon);

SetZone(13, 0, TABLE_Band_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(13, 1, TABLE_Band_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(13, 2, TABLE_DMRV_M, 0, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(13, 3, TABLE_Band_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(13, 4, TABLE_Band_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(13, 5, TABLE_Band_M, 0, TERRAIN_Mountain, CHANCE_Common);
SetZone(13, 6, TABLE_Band_M, -20, TERRAIN_Mountain, CHANCE_Common);
SetZone(13, 7, TABLE_Band_M, -20, TERRAIN_Mountain, CHANCE_Common);
SetZone(13, 8, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 9, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 10, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 11, TABLE_Red_M, -20, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 12, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 13, TABLE_Red_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 14, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 15, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 16, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(13, 17, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(13, 18, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(13, 19, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(13, 20, TABLE_EPA_D, -50, TERRAIN_Desert, CHANCE_Frequent);
SetZone(13, 21, TABLE_EPA_C, -50, TERRAIN_City, CHANCE_Frequent);
SetZone(13, 22, TABLE_EPA_C, -50, TERRAIN_City, CHANCE_Frequent);
SetZone(13, 23, TABLE_Wild4_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 24, TABLE_Wild5_D, -50, TERRAIN_Desert, CHANCE_Common);
SetZone(13, 25, TABLE_Wild5_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(13, 26, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 27, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 28, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(13, 29, TABLE_Wild5_D, -50, TERRAIN_Desert, CHANCE_Rare);

SetZone(14, 0, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(14, 1, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(14, 2, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(14, 3, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 4, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 5, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 6, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 7, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 8, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(14, 9, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(14, 10, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(14, 11, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(14, 12, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(14, 13, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(14, 14, TABLE_SRNRRN_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(14, 15, TABLE_SRNRRN_D, -40, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(14, 16, TABLE_EPA_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(14, 17, TABLE_EPA_D, -40, TERRAIN_Desert, CHANCE_Frequent);
SetZone(14, 18, TABLE_EPA_D, -30, TERRAIN_Desert, CHANCE_Frequent);
SetZone(14, 19, TABLE_EPA_D, -30, TERRAIN_Desert, CHANCE_Frequent);
SetZone(14, 20, TABLE_EPA_D, -30, TERRAIN_Desert, CHANCE_Frequent);
SetZone(14, 21, TABLE_EPA_C, -30, TERRAIN_City, CHANCE_Frequent);
SetZone(14, 22, TABLE_EPA_C, -30, TERRAIN_City, CHANCE_Frequent);
SetZone(14, 23, TABLE_NRNR_D, -30, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(14, 24, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Common);
SetZone(14, 25, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(14, 26, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Rare);
SetZone(14, 27, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Rare);
SetZone(14, 28, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Rare);
SetZone(14, 29, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Rare);

SetZone(15, 0, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 1, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 2, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 3, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 4, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 5, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 6, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 7, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 8, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 9, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(15, 10, TABLE_Band_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 11, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(15, 12, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 13, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 14, TABLE_SRNRRN_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 15, TABLE_SRNRRN_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 16, TABLE_EPA_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(15, 17, TABLE_EPA_M, -40, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(15, 18, TABLE_EPA_M, -30, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(15, 19, TABLE_EPA_D, -30, TERRAIN_Desert, CHANCE_Frequent);
SetZone(15, 20, TABLE_EPA_M, -30, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(15, 21, TABLE_EPA_C, -30, TERRAIN_City, CHANCE_Frequent);
SetZone(15, 22, TABLE_EPA_C, -30, TERRAIN_City, CHANCE_Frequent);
SetZone(15, 23, TABLE_NRNR_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(15, 24, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Common);
SetZone(15, 25, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(15, 26, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(15, 27, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(15, 28, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(15, 29, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);

SetZone(16, 0, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 1, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 2, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(16, 3, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 4, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 5, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 6, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 7, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 8, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(16, 9, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 10, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(16, 11, TABLE_Red_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(16, 12, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(16, 13, TABLE_Red_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 14, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 15, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 16, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 17, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 18, TABLE_New_D, -30, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(16, 19, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 20, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 21, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 22, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 23, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 24, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(16, 25, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 26, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(16, 27, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(16, 28, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(16, 29, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);

SetZone(17, 0, TABLE_Wild1_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(17, 1, TABLE_Wild1_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(17, 2, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(17, 3, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 4, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 5, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 6, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 7, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 8, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(17, 9, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 10, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 11, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 12, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 13, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(17, 14, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 15, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 16, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 17, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 18, TABLE_New_D, -30, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(17, 19, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 20, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 21, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 22, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 23, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 24, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(17, 25, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 26, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(17, 27, TABLE_NRNR_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(17, 28, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(17, 29, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Uncommon);

SetZone(18, 0, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 1, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 2, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(18, 3, TABLE_DMRV_D, -15, TERRAIN_Desert, CHANCE_Common);
SetZone(18, 4, TABLE_DMRV_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(18, 5, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(18, 6, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 7, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 8, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(18, 9, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(18, 10, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 11, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 12, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 13, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 14, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 15, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(18, 16, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(18, 17, TABLE_New_C, -40, TERRAIN_City, CHANCE_Common);
SetZone(18, 18, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(18, 19, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(18, 20, TABLE_New_C, -30, TERRAIN_City, CHANCE_Uncommon);
SetZone(18, 21, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(18, 22, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 23, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 24, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(18, 25, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 26, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 27, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(18, 28, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Rare);
SetZone(18, 29, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Rare);

SetZone(19, 0, TABLE_Wild1_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(19, 1, TABLE_Wild1_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(19, 2, TABLE_Wild1_D, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 3, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 4, TABLE_DVMV_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(19, 5, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(19, 6, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 7, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 8, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 9, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 10, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(19, 11, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 12, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 13, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 14, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 15, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(19, 16, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(19, 17, TABLE_New_C, -40, TERRAIN_City, CHANCE_Common);
SetZone(19, 18, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(19, 19, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(19, 20, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 21, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Common);
SetZone(19, 22, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(19, 23, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 24, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(19, 25, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 26, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 27, TABLE_NRNR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(19, 28, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Rare);
SetZone(19, 29, TABLE_Wild5_D, -70, TERRAIN_Desert, CHANCE_Rare);

SetZone(20, 0, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 1, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 2, TABLE_Wild1_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 3, TABLE_DMRV_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 4, TABLE_DVMV_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(20, 5, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(20, 6, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 7, TABLE_Mod_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 8, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 9, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 10, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 11, TABLE_Wild3_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 12, TABLE_Raid_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 13, TABLE_Raid_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 14, TABLE_Wild3_M, -40, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 15, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(20, 16, TABLE_New_M, -40, TERRAIN_Mountain, CHANCE_Rare);
SetZone(20, 17, TABLE_New_C, -40, TERRAIN_City, CHANCE_Common);
SetZone(20, 18, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(20, 19, TABLE_New_C, -30, TERRAIN_City, CHANCE_Common);
SetZone(20, 20, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 21, TABLE_New_M, -30, TERRAIN_Mountain, CHANCE_Common);
SetZone(20, 22, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(20, 23, TABLE_Wild6_M, -30, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 24, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Common);
SetZone(20, 25, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 26, TABLE_Wild5_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 27, TABLE_NCR_M, -70, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(20, 28, TABLE_NCR_D, -70, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(20, 29, TABLE_NCR_D, -70, TERRAIN_Desert, CHANCE_Rare);

SetZone(21, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 1, TABLE_Wild2_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 2, TABLE_Wild2_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 3, TABLE_Wild2_D, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 4, TABLE_DVMV_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 5, TABLE_VPat_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 6, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 7, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 8, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 9, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 10, TABLE_Raid_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 11, TABLE_Raid_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 12, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 13, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 14, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 15, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 16, TABLE_New_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 17, TABLE_New_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 18, TABLE_New_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 19, TABLE_New_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 20, TABLE_New_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 21, TABLE_New_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(21, 22, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 23, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 24, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(21, 25, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 26, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(21, 27, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(21, 28, TABLE_NCR_D, -50, TERRAIN_Desert, CHANCE_Rare);
SetZone(21, 29, TABLE_NCR_D, -50, TERRAIN_Desert, CHANCE_Rare);

SetZone(22, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 1, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 2, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 3, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 4, TABLE_DVMV_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 5, TABLE_VPat_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 6, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 7, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 9, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 10, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 11, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 12, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Common);
SetZone(22, 13, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Common);
SetZone(22, 14, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Common);
SetZone(22, 15, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 16, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Rare);
SetZone(22, 17, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Rare);
SetZone(22, 18, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Rare);
SetZone(22, 19, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 20, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 21, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 22, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 23, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(22, 24, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(22, 25, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 26, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(22, 27, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(22, 28, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(22, 29, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);

SetZone(23, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 1, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 2, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 3, TABLE_Wild2_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 4, TABLE_DVMV_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 5, TABLE_DVMV_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(23, 6, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Rare);
SetZone(23, 7, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Rare);
SetZone(23, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 9, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 10, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 11, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 12, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Common);
SetZone(23, 13, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(23, 14, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Common);
SetZone(23, 15, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 16, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Rare);
SetZone(23, 17, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Rare);
SetZone(23, 18, TABLE_Brok_D, -45, TERRAIN_Desert, CHANCE_Rare);
SetZone(23, 19, TABLE_Brok_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 20, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 21, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 22, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 23, TABLE_VNNB_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(23, 24, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(23, 25, TABLE_VNNB_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 26, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(23, 27, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(23, 28, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);
SetZone(23, 29, TABLE_NCR_M, -50, TERRAIN_Mountain, CHANCE_Rare);

SetZone(24, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 1, TABLE_Wild2_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(24, 2, TABLE_Wild2_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(24, 3, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(24, 4, TABLE_Geck_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 5, TABLE_DVMV_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(24, 6, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Common);
SetZone(24, 7, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 9, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 10, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 11, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 12, TABLE_RDRC_M, -55, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(24, 13, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Frequent);
SetZone(24, 14, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Common);
SetZone(24, 15, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(24, 16, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 17, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 18, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Rare);
SetZone(24, 19, TABLE_Brok_D, -45, TERRAIN_Desert, CHANCE_Common);
SetZone(24, 20, TABLE_Wild6_D, -45, TERRAIN_Desert, CHANCE_Frequent);
SetZone(24, 21, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Common);
SetZone(24, 22, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 23, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 24, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(24, 25, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 26, TABLE_V15_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(24, 27, TABLE_V15_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(24, 28, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(24, 29, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);

SetZone(25, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(25, 1, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(25, 2, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(25, 3, TABLE_Geck_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(25, 4, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(25, 5, TABLE_DVMV_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(25, 6, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Rare);
SetZone(25, 7, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Rare);
SetZone(25, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 9, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 10, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 11, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 12, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Frequent);
SetZone(25, 13, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Frequent);
SetZone(25, 14, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Common);
SetZone(25, 15, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(25, 16, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 17, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 18, TABLE_Brok_D, -45, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(25, 19, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Common);
SetZone(25, 20, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Frequent);
SetZone(25, 21, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Common);
SetZone(25, 22, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 23, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 24, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(25, 25, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 26, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 27, TABLE_V15_D, -50, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(25, 28, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(25, 29, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);

SetZone(26, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Common);
SetZone(26, 1, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(26, 2, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(26, 3, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Rare);
SetZone(26, 4, TABLE_Geck_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(26, 5, TABLE_Geck_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(26, 6, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(26, 7, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(26, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 9, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 10, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 11, TABLE_RDRC_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 12, TABLE_RDRC_D, -55, TERRAIN_Desert, CHANCE_Common);
SetZone(26, 13, TABLE_Raid_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(26, 14, TABLE_Raid_D, -55, TERRAIN_Desert, CHANCE_Rare);
SetZone(26, 15, TABLE_Brok_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(26, 16, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 17, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 18, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 19, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 20, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 21, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 22, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 23, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 24, TABLE_Wild5_D, -50, TERRAIN_Desert, CHANCE_Common);
SetZone(26, 25, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 26, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 27, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 28, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(26, 29, TABLE_V15_D, -50, TERRAIN_Desert, CHANCE_Uncommon);

SetZone(27, 0, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(27, 1, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(27, 2, TABLE_Wild2_M, -15, TERRAIN_Mountain, CHANCE_Rare);
SetZone(27, 3, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 4, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 5, TABLE_Geck_D, -15, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 6, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 7, TABLE_VPat_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 8, TABLE_VPat_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 9, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 10, TABLE_Raid_M, -35, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 11, TABLE_Raid_D, -35, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 12, TABLE_Raid_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 13, TABLE_Raid_D, -55, TERRAIN_Desert, CHANCE_Uncommon);
SetZone(27, 14, TABLE_Raid_M, -55, TERRAIN_Mountain, CHANCE_Rare);
SetZone(27, 15, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 16, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 17, TABLE_Brok_M, -55, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 18, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 19, TABLE_Brok_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 20, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 21, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 22, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 23, TABLE_Wild6_M, -45, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 24, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Common);
SetZone(27, 25, TABLE_Wild5_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 26, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 27, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 28, TABLE_V15_M, -50, TERRAIN_Mountain, CHANCE_Uncommon);
SetZone(27, 29, TABLE_V15_D, -50, TERRAIN_Desert, CHANCE_Uncommon);