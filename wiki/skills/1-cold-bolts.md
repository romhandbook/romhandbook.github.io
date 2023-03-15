---
title: Cold Bolts 
layout: home
nav_exclude: true
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

### [Cold Bolts](/docs/skills/1-cold-bolts)
- Attacks an enemy with the ice arrows from the sky, dealing (M.Atk1500%) water M.Dmg
  - <p class="label label-yellow">Level: 15</p><p class="label label-yellow">Attack</p><p class="label label-yellow">Magic</p><p class="label label-yellow">Skill Delay: 2.8sec</p><p class="label label-yellow">Range: 6</p>

|----|----|
| Level | Description |
| 1 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk100%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 2 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 3 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 4 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 5 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 6 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 7 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 8 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 9 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 10 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 11 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 12 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 13 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 14 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |
| 15 | Attacks an enemy with the ice arrows from the sky, dealing (M.Atk200%) water M.Dmg |
|  | _Type: Attack, Magic \| Skill Delay: 2.8sec \| Range: 6_ |

### Aesir

|---|
| [Cold Bolt -Mastery] - Cast Delay of [Cold Bolt]－0.1 sec |
| [Element Diffusion - Empower] - Splash Damage of [Element Diffusion] ＋2% |
| [Element Diffusion - Empower] - Splash Damage of Element Diffusion ＋2% |
| [Element Diffusion] - [Fire Bolt] [Cold Bolt] [Lightning Bolt] splashes to 3 targets, dealing splash damage equal to 5% skill damage. SP Cost ＋25%% |
| [Cold Bolt -Quick Cast] - Fixed Cast Time of [Cold Bolt]－0.2 sec |
| [High-energy Cold Bolt] - [Cold Bolt] has a 8% chance to become high-energy, dealing ＋10%% total damage |
| [Element Concentration] - Increases the damage of [Fire Bolt], [Cold Bolt], [Lightning Bolt] and [Chronology Bolt] by 10%. |
| [Element Concentration] - Increases the damage of [Fire Bolt], [Cold Bolt], [Lightning Bolt] and [Chronology Bolt] by 10%. |

### Self Buff
```lua
{
  "id": 116831,
  "BuffDesc": "Water Damage up",
  "BuffIcon": "skillbuff_commonbuff",
  "BuffName": "Aqua Elemental",
  "BuffRate": {
    "Odds": {
      "a": 1163,
      "b": 100,
      "c": 0,
      "type": 8
    }
  },
  "BuffType": {
    "isgain": 1,
    "isdisperse": 1
  },
  "IconType": 1,
  "BuffEffect": {
    "type": "AttrChange",
    "WaterAtk": {
      "type": 4010
    },
    "NormalAtk": {
      "a": 0,
      "b": 0,
      "c": 21112,
      "type": 5010
    },
    "extra_attr": {
      "WaterAtk": {
        "a": 3103,
        "b": 0.01,
        "c": 0,
        "type": 8
      }
    },
    "NormalAtkDam": {
      "a": 0,
      "b": 0,
      "c": 21111,
      "type": 5020
    }
  },
  "BuffStateID": 116831
}
```

### Formula
```lua
function CommonFun.calcDamage_38(srcUser, targetUser, params, damageParam, logger)
  local Int = srcUser:GetProperty("Int")
  local Vit = srcUser:GetProperty("Vit")
  local MAtk = srcUser:GetProperty("MAtk")
  local MAtkPer = srcUser:GetProperty("MAtkPer")
  local MDamIncrease = CommonFun.calcMDamIncrease(srcUser, targetUser)
  local IgnoreMDef = srcUser:GetProperty("IgnoreMDef")
  if 1 <= IgnoreMDef then
    IgnoreMDef = 1
  end
  local Num1 = srcUser:GetRunePoint(22120_AESIR_COLD_BOLT_HAS_A_8_CHANCE_TO_BECOME_HIGH_ENERGY_DEALING_10_TOTAL_DAMAGE)
  local RuneRate = 0
  if 0 < Num1 then
    RuneRate = 8
  end
  local RuneDamage = Num1 * 0.1 + 1
  local Num2 = srcUser:GetRunePoint(22160_AESIR_INCREASES_THE_DAMAGE_OF_FIRE_BOLT_COLD_BOLT_LIGHTNING_BOLT_AND_CHRONOLOGY_BOLT_BY_10)
  local Num3 = srcUser:GetRunePoint(22161_AESIR_INCREASES_THE_DAMAGE_OF_FIRE_BOLT_COLD_BOLT_LIGHTNING_BOLT_AND_CHRONOLOGY_BOLT_BY_10)
  local RuneDamage1 = (Num2 + Num3) * 0.1 + 1
  local MRefine = srcUser:GetProperty("MRefine")
  local srcAtkElement = CommonFun.GetUserAtkAttr(srcUser, params, damageParam)
  local targetDefElement = targetUser:GetProperty("DefAttr")
  local elementparam2 = CommonFun.CalcElementParam2(srcUser, targetUser, params, damageParam, logger)
  local raceparam = CommonFun.CalcRaceParam(srcUser, targetUser, params, damageParam, logger)
  local raceparam2 = CommonFun.CalcRaceParam2(srcUser, targetUser, params, damageParam, logger)
  local bossparam = CommonFun.CalcBossParam(srcUser, targetUser, params, damageParam, logger)
  local bossparam2 = CommonFun.CalcBossParam2(srcUser, targetUser, params, damageParam, logger)
  local MDef2 = targetUser:GetProperty("MDef")
  local MDefPer2 = targetUser:GetProperty("MDefPer")
  local Vit2 = targetUser:GetProperty("Vit")
  local VitPer2 = targetUser:GetProperty("VitPer")
  local Int2 = targetUser:GetProperty("Int")
  local IntPer2 = targetUser:GetProperty("IntPer")
  local MDamReduc2 = CommonFun.calcMDamReDuc(srcUser, targetUser)
  local RefineMDamReduc = targetUser:GetProperty("RefineMDamReduc")
  local damChangePer = damageParam.damChangePer
  local damChangePer1 = damageParam.damChangePer1
  local BaseMAtk = Int + math.floor(Int * Int / 100)
  local MAtkFinal = ((MAtk - BaseMAtk) * (1 + MAtkPer) + BaseMAtk) * raceparam * bossparam * bossparam2
  local MDefReduc = CommonFun.CalcMDef(srcUser, targetUser)
  local BaseLvDamage = 0
  local IBaseLv = srcUser.BaseLv
  if srcUser:HasBuffID(42110_FLUORESCENCE_:MAX_STACK_0) then
    BaseLvDamage = IBaseLv * 15
  end
  if srcUser:HasBuffID(42120_MJOLNIR_SPELLBOOK_:MAX_STACK_0) then
    BaseLvDamage = IBaseLv * 15
  end
  local taozhuang1 = 1
  if srcUser:HasBuffID(91000470_SAGE_S_BOOK_TELEKINETIC_ORB_:MAX_STACK_0) or srcUser:HasBuffID(91000770_SAGE_S_HANDBOOK_TELEKINETIC_ORB_:MAX_STACK_0) or srcUser:HasBuffID(91001490_SAGE_S_BOOK_CONTRACT_JEWELERY_:MAX_STACK_0) or srcUser:HasBuffID(91001500_SAGE_S_HANDBOOK_CONTRACT_JEWELERY_:MAX_STACK_0) then
    taozhuang1 = 1.15
  end
  local Ring1 = srcUser:GetEquipedID(7_WEAPON)
  local RefineLv = srcUser:GetEquipedRefineLv(7_WEAPON)
  if Ring1 == 63440_SAGE_S_HANDBOOK_1 or Ring1 == 163440_SAGE_S_HANDBOOK_2 then
    taozhuang1 = RefineLv * 0.01 + taozhuang1
  end
  local GemValue = srcUser:GetGemValue(82072_COLD_BOLT_DMG_PERCENTAGE)
  local GemDam = 1 + GemValue / 100000
  local SnowBeast = 1
  if srcUser:HasBuffID(53980_SMALL_SIROMA_CARD_:MAX_STACK_0) then
    SnowBeast = 1.1
  end
  if srcUser:HasBuffID(53980_SMALL_SIROMA_CARD_:MAX_STACK_0) and srcUser:HasBuffID(80002350_SIROMA_CARD_DEPOSITE_:MAX_STACK_0) then
    SnowBeast = SnowBeast + 0.02
  end
  local A = ((MAtkFinal * MDefReduc * (1 - MDamReduc2) + MRefine) * (1 - RefineMDamReduc) * damChangePer * (1 + MDamIncrease) * CommonFun.calcMagicElement(srcUser, targetUser, params, damageParam) * elementparam2 - Vit2 / 2 * (1 + VitPer2) - Int2 * (1 + IntPer2) + damChangePer1) * RuneDamage1 * taozhuang1 * GemDam * SnowBeast + BaseLvDamage
  if A <= 1 then
    return 1
  end
  if CommonFun.IsInRate(RuneRate, srcUser:GetRandom()) then
    return A * RuneDamage, CommonFun.DamageType.Crit
  end
  return A
end
```

### Raw Data
```lua
{
  "id": 74015,
  "Buff": {
    "self": [
      116831
    ]
  },
  "Cost": 1,
  "Desc": [
    {
      "id": 74000,
      "params": [
        1500
      ]
    }
  ],
  "Icon": "skill_74001",
  "Camps": "Enemy",
  "Level": 15,
  "Logic": "SkillLockedTarget",
  "Damage": [
    {
      "type": 38,
      "damChangePer": 15,
      "elementparam": 3,
      "damChangePer1": 200
    }
  ],
  "DescId": "##170857",
  "NameZh": "##169905",
  "SE_hit": "Skill/skill_weapon_icearrow_hit_01-Skill/skill_weapon_icearrow_hit_02-Skill/skill_weapon_icearrow_hit_03-Skill/skill_weapon_icearrow_hit_04",
  "CastAct": "reading",
  "DamTime": {
    "type": 1,
    "value": 10
  },
  "DelayCD": 2.8,
  "Fire_EP": 3,
  "SE_cast": "Common/Magic_cast",
  "Pvp_buff": {
    "self": [
      116831
    ]
  },
  "RollType": 2,
  "AttackAct": [
    "use_magic"
  ],
  "Attack_EP": 3,
  "Lead_Type": {
    "CCT": 0.88,
    "FCT": 3.52,
    "type": 2
  },
  "PeakLevel": 5,
  "SkillCost": {
    "sp": 82
  },
  "SkillType": "Attack",
  "Target_EP": 3,
  "DamageType": 2,
  "Launch_Range": 6
}
```
