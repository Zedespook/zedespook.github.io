export type Card = {
	name: string;
	image: string;
	rarity: string;
	type: string;
	energy: string;
	owner: string;
	[key: string]: any;
};

export const cards: Card[] = [
	{
		name: 'Bash',
		image: 'assets/Bash.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Defend',
		image: 'assets/Defend_R.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Strike',
		image: 'assets/Strike_R.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Anger',
		image: 'assets/Anger.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Armaments',
		image: 'assets/Armaments.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Body Slam',
		image: 'assets/BodySlam.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Clash',
		image: 'assets/Clash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Cleave',
		image: 'assets/Cleave.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Clothesline',
		image: 'assets/Clothesline.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Flex',
		image: 'assets/Flex.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Havoc',
		image: 'assets/Havoc.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Headbutt',
		image: 'assets/Headbutt.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Heavy Blade',
		image: 'assets/HeavyBlade.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Iron Wave',
		image: 'assets/IronWave.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Perfected Strike',
		image: 'assets/PerfectedStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Pommel Strike',
		image: 'assets/PommelStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Shrug it Off',
		image: 'assets/ShrugItOff.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Sword Boomerang',
		image: 'assets/SwordBoomerang.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Thunderclap',
		image: 'assets/Thunderclap.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'True Grit',
		image: 'assets/TrueGrit.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Twin Strike',
		image: 'assets/TwinStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Warcry',
		image: 'assets/Warcry.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Wild Strike',
		image: 'assets/WildStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Battle Trance',
		image: 'assets/BattleTrance.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Blood for Blood',
		image: 'assets/BloodforBlood.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '4',
		owner: 'Ironclad'
	},
	{
		name: 'Bloodletting',
		image: 'assets/Bloodletting.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Burning Pact',
		image: 'assets/BurningPact.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Carnage',
		image: 'assets/Carnage.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Combust',
		image: 'assets/Combust.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Dark Embrace',
		image: 'assets/DarkEmbrace.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Disarm',
		image: 'assets/Disarm.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Dropkick',
		image: 'assets/Dropkick.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Dual Wield',
		image: 'assets/DualWield.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Entrench',
		image: 'assets/Entrench.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Evolve',
		image: 'assets/Evolve.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Feel No Pain',
		image: 'assets/FeelNoPain.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Fire Breathing',
		image: 'assets/FireBreathing.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Flame Barrier',
		image: 'assets/FlameBarrier.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Ghostly Armor',
		image: 'assets/GhostlyArmor.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Hemokinesis',
		image: 'assets/Hemokinesis.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Infernal Blade',
		image: 'assets/InfernalBlade.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Inflame',
		image: 'assets/Inflame.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Intimidate',
		image: 'assets/Intimidate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Metallicize',
		image: 'assets/Metallicize.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Power Through',
		image: 'assets/PowerThrough.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Pummel',
		image: 'assets/Pummel.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Rage',
		image: 'assets/Rage.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Rampage',
		image: 'assets/Rampage.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Reckless Charge',
		image: 'assets/RecklessCharge.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Rupture',
		image: 'assets/Rupture.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Searing Blow',
		image: 'assets/SearingBlow.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Second Wind',
		image: 'assets/SecondWind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Seeing Red',
		image: 'assets/SeeingRed.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Sentinel',
		image: 'assets/Sentinel.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Sever Soul',
		image: 'assets/SeverSoul.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Shockwave',
		image: 'assets/Shockwave.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Spot Weakness',
		image: 'assets/SpotWeakness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Uppercut',
		image: 'assets/Uppercut.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Whirlwind',
		image: 'assets/Whirlwind.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: 'X',
		owner: 'Ironclad'
	},
	{
		name: 'Barricade',
		image: 'assets/Barricade.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad'
	},
	{
		name: 'Berserk',
		image: 'assets/Berserk.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Bludgeon',
		image: 'assets/Bludgeon.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Ironclad'
	},
	{
		name: 'Brutality',
		image: 'assets/Brutality.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Corruption',
		image: 'assets/Corruption.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad'
	},
	{
		name: 'Demon Form',
		image: 'assets/DemonForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad'
	},
	{
		name: 'Double Tap',
		image: 'assets/DoubleTap.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Exhume',
		image: 'assets/Exhume.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Feed',
		image: 'assets/Feed.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Fiend Fire',
		image: 'assets/FiendFire.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Immolate',
		image: 'assets/Immolate.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Impervious',
		image: 'assets/Impervious.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Juggernaut',
		image: 'assets/Juggernaut.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Limit Break',
		image: 'assets/LimitBreak.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad'
	},
	{
		name: 'Offering',
		image: 'assets/Offering.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad'
	},
	{
		name: 'Reaper',
		image: 'assets/Reaper.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad'
	},
	{
		name: 'Defend',
		image: 'assets/Defend_G.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Neutralize',
		image: 'assets/Neutralize.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Strike',
		image: 'assets/Strike_G.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Survivor',
		image: 'assets/Survivor.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Acrobatics',
		image: 'assets/Acrobatics.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Backflip',
		image: 'assets/Backflip.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Bane',
		image: 'assets/Bane.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Blade Dance',
		image: 'assets/BladeDance.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Cloak And Dagger',
		image: 'assets/CloakAndDagger.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Dagger Spray',
		image: 'assets/DaggerSpray.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Dagger Throw',
		image: 'assets/R_dagger-throw.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Deadly Poison',
		image: 'assets/DeadlyPoison.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Deflect',
		image: 'assets/Deflect.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Dodge and Roll',
		image: 'assets/DodgeandRoll.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Flying Knee',
		image: 'assets/FlyingKnee.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Outmaneuver',
		image: 'assets/Outmaneuver.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Piercing Wail',
		image: 'assets/PiercingWail.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Poisoned Stab',
		image: 'assets/PoisonedStab.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Prepared',
		image: 'assets/Prepared.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Quick Slash',
		image: 'assets/QuickSlash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Slice',
		image: 'assets/Slice.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Sneaky Strike',
		image: 'assets/SneakyStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Sucker Punch',
		image: 'assets/SuckerPunch.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Accuracy',
		image: 'assets/Accuracy.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'All-Out Attack',
		image: 'assets/All-OutAttack.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Backstab',
		image: 'assets/Backstab.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Blur',
		image: 'assets/Blur.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Bouncing Flask',
		image: 'assets/BouncingFlask.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Calculated Gamble',
		image: 'assets/CalculatedGamble.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Caltrops',
		image: 'assets/Caltrops.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Catalyst',
		image: 'assets/Catalyst.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Choke',
		image: 'assets/Choke.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Concentrate',
		image: 'assets/Concentrate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Crippling Cloud',
		image: 'assets/CripplingCloud.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Dash',
		image: 'assets/Dash.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Distraction',
		image: 'assets/Distraction.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Endless Agony',
		image: 'assets/EndlessAgony.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Escape Plan',
		image: 'assets/EscapePlan.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Eviscerate',
		image: 'assets/Eviscerate.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '3',
		owner: 'Silent'
	},
	{
		name: 'Expertise',
		image: 'assets/Expertise.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Finisher',
		image: 'assets/Finisher.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Flechettes',
		image: 'assets/Flechettes.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Footwork',
		image: 'assets/Footwork.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Heel Hook',
		image: 'assets/HeelHook.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Infinite Blades',
		image: 'assets/InfiniteBlades.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Leg Sweep',
		image: 'assets/LegSweep.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Masterful Stab',
		image: 'assets/MasterfulStab.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Noxious Fumes',
		image: 'assets/NoxiousFumes.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Predator',
		image: 'assets/Predator.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Reflex',
		image: 'assets/Reflex.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '',
		owner: 'Silent'
	},
	{
		name: 'Riddle With Holes',
		image: 'assets/RiddleWithHoles.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Setup',
		image: 'assets/Setup.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Skewer',
		image: 'assets/Skewer.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: 'X',
		owner: 'Silent'
	},
	{
		name: 'Tactician',
		image: 'assets/Tactician.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '',
		owner: 'Silent'
	},
	{
		name: 'Terror',
		image: 'assets/Terror.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Well-Laid Plans',
		image: 'assets/Well-LaidPlans.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'A Thousand Cuts',
		image: 'assets/AThousandCuts.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Adrenaline',
		image: 'assets/Adrenaline.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'After Image',
		image: 'assets/AfterImage.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Alchemize',
		image: 'assets/Alchemize.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Bullet Time',
		image: 'assets/BulletTime.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Silent'
	},
	{
		name: 'Burst',
		image: 'assets/Burst.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Corpse Explosion',
		image: 'assets/CorpseExplosion.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Die Die Die',
		image: 'assets/DieDieDie.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Doppelganger',
		image: 'assets/Doppelganger.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Silent'
	},
	{
		name: 'Envenom',
		image: 'assets/Envenom.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Silent'
	},
	{
		name: 'Glass Knife',
		image: 'assets/GlassKnife.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Grand Finale',
		image: 'assets/GrandFinale.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '0',
		owner: 'Silent'
	},
	{
		name: 'Malaise',
		image: 'assets/Malaise.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Silent'
	},
	{
		name: 'Nightmare',
		image: 'assets/Nightmare.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Silent'
	},
	{
		name: 'Phantasmal Killer',
		image: 'assets/PhantasmalKiller.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Storm of Steel',
		image: 'assets/StormofSteel.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Tools of the Trade',
		image: 'assets/ToolsoftheTrade.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Unload',
		image: 'assets/Unload.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent'
	},
	{
		name: 'Wraith Form',
		image: 'assets/WraithForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Silent'
	},
	{
		name: 'Defend',
		image: 'assets/Defend_B.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Dualcast',
		image: 'assets/Dualcast.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Strike',
		image: 'assets/Strike_B.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Zap',
		image: 'assets/Zap.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Ball Lightning',
		image: 'assets/BallLightning.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Barrage',
		image: 'assets/Barrage.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Beam Cell',
		image: 'assets/BeamCell.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Charge Battery',
		image: 'assets/ChargeBattery.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Claw',
		image: 'assets/Claw.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Cold Snap',
		image: 'assets/ColdSnap.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Compile Driver',
		image: 'assets/CompileDriver.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Coolheaded',
		image: 'assets/Coolheaded.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Go for the Eyes',
		image: 'assets/GofortheEyes.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Hologram',
		image: 'assets/Hologram-0.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Leap',
		image: 'assets/Leap.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Rebound',
		image: 'assets/Rebound.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Recursion',
		image: 'assets/Recursion.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Stack',
		image: 'assets/Stack.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Steam Barrier',
		image: 'assets/SteamBarrier.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Streamline',
		image: 'assets/Streamline.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Sweeping Beam',
		image: 'assets/SweepingBeam.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'TURBO',
		image: 'assets/TURBO.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Aggregate',
		image: 'assets/Aggregate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Auto-Shields',
		image: 'assets/Auto-Shields.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Blizzard',
		image: 'assets/Blizzard.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Boot Sequence',
		image: 'assets/BootSequence.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Bullseye',
		image: 'assets/BullsEye.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Capacitor',
		image: 'assets/Capacitor.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Chaos',
		image: 'assets/Chaos.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Chill',
		image: 'assets/Chill.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Consume',
		image: 'assets/Consume.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Darkness',
		image: 'assets/Darkness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Defragment',
		image: 'assets/Defragment.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Doom and Gloom',
		image: 'assets/DoomandGloom.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Double Energy',
		image: 'assets/DoubleEnergy.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Equilibrium',
		image: 'assets/Equilibrium.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'FTL',
		image: 'assets/FTL.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Force Field',
		image: 'assets/ForceField.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '4',
		owner: 'Defect'
	},
	{
		name: 'Fusion',
		image: 'assets/Fusion.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Genetic Algorithm',
		image: 'assets/GeneticAlgorithm.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Glacier',
		image: 'assets/Glacier.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Heatsinks',
		image: 'assets/Heatsinks.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Hello World',
		image: 'assets/HelloWorld.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Loop',
		image: 'assets/Loop.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Melter',
		image: 'assets/Melter.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Overclock',
		image: 'assets/Overclock.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Recycle',
		image: 'assets/Recycle.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Reinforced Body',
		image: 'assets/ReinforcedBody.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect'
	},
	{
		name: 'Reprogram',
		image: 'assets/Reprogram.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Rip and Tear',
		image: 'assets/RipandTear.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Scrape',
		image: 'assets/Scrape.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Self Repair',
		image: 'assets/SelfRepair.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Skim',
		image: 'assets/Skim.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Static Discharge',
		image: 'assets/StaticDischarge.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Storm',
		image: 'assets/Storm.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Sunder',
		image: 'assets/Sunder.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '3',
		owner: 'Defect'
	},
	{
		name: 'Tempest',
		image: 'assets/Tempest.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect'
	},
	{
		name: 'White Noise',
		image: 'assets/WhiteNoise.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'All for One',
		image: 'assets/AllforOne.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Amplify',
		image: 'assets/Amplify.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Biased Cognition',
		image: 'assets/BiasedCognition.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Buffer',
		image: 'assets/Buffer.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Core Surge',
		image: 'assets/CoreSurge.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Creative AI',
		image: 'assets/CreativeAI.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Defect'
	},
	{
		name: 'Echo Form',
		image: 'assets/EchoForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Defect'
	},
	{
		name: 'Electrodynamics',
		image: 'assets/Electrodynamics.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Fission',
		image: 'assets/Fission.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Hyperbeam',
		image: 'assets/Hyperbeam.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Machine Learning',
		image: 'assets/MachineLearning.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Defect'
	},
	{
		name: 'Meteor Strike',
		image: 'assets/MeteorStrike.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '5',
		owner: 'Defect'
	},
	{
		name: 'Multi-Cast',
		image: 'assets/Multi-Cast.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect'
	},
	{
		name: 'Rainbow',
		image: 'assets/Rainbow.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Defect'
	},
	{
		name: 'Reboot',
		image: 'assets/Reboot.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Seek',
		image: 'assets/Seek.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect'
	},
	{
		name: 'Thunder Strike',
		image: 'assets/ThunderStrike.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Defect'
	},
	{
		name: 'Defend',
		image: 'assets/Defend_P.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Eruption',
		image: 'assets/Eruption.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Strike',
		image: 'assets/Strike_P.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Vigilance',
		image: 'assets/Vigilance.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Bowling Bash',
		image: 'assets/BowlingBash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Consecrate',
		image: 'assets/Consecrate.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Crescendo',
		image: 'assets/Crescendo.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Crush Joints',
		image: 'assets/CrushJoints.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Cut Through Fate',
		image: 'assets/CutThroughFate.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Empty Body',
		image: 'assets/EmptyBody.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Empty Fist',
		image: 'assets/EmptyFist.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Evaluate',
		image: 'assets/Evaluate.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Flurry of Blows',
		image: 'assets/FlurryOfBlows.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Flying Sleeves',
		image: 'assets/FlyingSleeves.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Follow-Up',
		image: 'assets/Follow-Up.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Halt',
		image: 'assets/Halt.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Just Lucky',
		image: 'assets/JustLucky.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Pressure Points',
		image: 'assets/PressurePoints.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Prostrate',
		image: 'assets/Prostrate.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Protect',
		image: 'assets/Protect.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Sash Whip',
		image: 'assets/SashWhip.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Third Eye',
		image: 'assets/ThirdEye.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Tranquility',
		image: 'assets/Tranquility.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Battle Hymn',
		image: 'assets/BattleHymn.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Carve Reality',
		image: 'assets/CarveReality.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Collect',
		image: 'assets/Collect.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Watcher'
	},
	{
		name: 'Conclude',
		image: 'assets/Conclude.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Deceive Reality',
		image: 'assets/DeceiveReality.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Empty Mind',
		image: 'assets/EmptyMind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Fasting',
		image: 'assets/Fasting.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Fear No Evil',
		image: 'assets/FearNoEvil.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Foreign Influence',
		image: 'assets/ForeignInfluence.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Foresight',
		image: 'assets/Foresight.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Indignation',
		image: 'assets/Indignation.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Inner Peace',
		image: 'assets/InnerPeace.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Like Water',
		image: 'assets/LikeWater.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Meditate',
		image: 'assets/Meditate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Mental Fortress',
		image: 'assets/MentalFortress.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Nirvana',
		image: 'assets/Nirvana.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Perseverance',
		image: 'assets/Perseverance.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Pray',
		image: 'assets/Pray.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Reach Heaven',
		image: 'assets/ReachHeaven.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Rushdown',
		image: 'assets/Rushdown.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Sanctity',
		image: 'assets/Sanctity.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Sands of Time',
		image: 'assets/SandsofTime.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '4',
		owner: 'Watcher'
	},
	{
		name: 'Signature Move',
		image: 'assets/SignatureMove.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Simmering Fury',
		image: 'assets/SimmeringFury.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Study',
		image: 'assets/Study.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Swivel',
		image: 'assets/Swivel.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Talk to the Hand',
		image: 'assets/TalktotheHand.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Tantrum',
		image: 'assets/Tantrum.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Wallop',
		image: 'assets/Wallop.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Wave of the Hand',
		image: 'assets/WaveoftheHand.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Weave',
		image: 'assets/Weave.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher'
	},
	{
		name: 'Wheel Kick',
		image: 'assets/WheelKick.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Windmill Strike',
		image: 'assets/WindmillStrike.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Worship',
		image: 'assets/Worship.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Wreath of Flame',
		image: 'assets/WreathofFlame.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Alpha',
		image: 'assets/Alpha.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Blasphemy',
		image: 'assets/Blasphemy.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Brilliance',
		image: 'assets/Brilliance.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Conjure Blade',
		image: 'assets/ConjureBlade.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Watcher'
	},
	{
		name: 'Deus Ex Machina',
		image: 'assets/DeusExMachina.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'Unplayable',
		owner: 'Watcher'
	},
	{
		name: 'Deva Form',
		image: 'assets/DevaForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Watcher'
	},
	{
		name: 'Devotion',
		image: 'assets/Devotion.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Establishment',
		image: 'assets/Establishment.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Judgment',
		image: 'assets/Judgment.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Lesson Learned',
		image: 'assets/LessonLearned.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Master Reality',
		image: 'assets/MasterReality.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Omniscience',
		image: 'assets/Omniscience.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '4',
		owner: 'Watcher'
	},
	{
		name: 'Ragnarok',
		image: 'assets/Ragnarok.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Watcher'
	},
	{
		name: 'Scrawl',
		image: 'assets/Scrawl.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher'
	},
	{
		name: 'Spirit Shield',
		image: 'assets/SpiritShield.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher'
	},
	{
		name: 'Vault',
		image: 'assets/Vault.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Watcher'
	},
	{
		name: 'Wish',
		image: 'assets/Wish.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Watcher'
	},
	{
		name: 'Bandage Up',
		image: 'assets/BandageUp.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Blind',
		image: 'assets/Blind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Dark Shackles',
		image: 'assets/DarkShackles.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Deep Breath',
		image: 'assets/DeepBreath.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Discovery',
		image: 'assets/Discovery.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Dramatic Entrance',
		image: 'assets/DramaticEntrance.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Enlightenment',
		image: 'assets/Enlightenment.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Finesse',
		image: 'assets/Finesse.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Flash of Steel',
		image: 'assets/FlashofSteel.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Forethought',
		image: 'assets/Forethought.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Good Instincts',
		image: 'assets/GoodInstincts.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Impatience',
		image: 'assets/Impatience.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Jack Of All Trades',
		image: 'assets/JackOfAllTrades.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Madness',
		image: 'assets/Madness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Mind Blast',
		image: 'assets/MindBlast.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Panacea',
		image: 'assets/Panacea.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Panic Button',
		image: 'assets/PanicButton.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Purity',
		image: 'assets/Purity.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Swift Strike',
		image: 'assets/SwiftStrike.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Trip',
		image: 'assets/Trip.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Apotheosis',
		image: 'assets/Apotheosis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Chrysalis',
		image: 'assets/Chrysalis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Hand of Greed',
		image: 'assets/HandOfGreed.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Magnetism',
		image: 'assets/Magnetism.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Master Of Strategy',
		image: 'assets/MasterOfStrategy.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Mayhem',
		image: 'assets/Mayhem.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Metamorphosis',
		image: 'assets/Metamorphosis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Panache',
		image: 'assets/Panache.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Sadistic Nature',
		image: 'assets/SadisticNature.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Secret Technique',
		image: 'assets/SecretTechnique.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Secret Weapon',
		image: 'assets/SecretWeapon.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'The Bomb',
		image: 'assets/TheBomb.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Thinking Ahead',
		image: 'assets/ThinkingAhead.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Transmutation',
		image: 'assets/Transmutation.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Colorless'
	},
	{
		name: 'Violence',
		image: 'assets/Violence.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Apparition',
		image: 'assets/Apparition.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Beta',
		image: 'assets/Beta.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless'
	},
	{
		name: 'Bite',
		image: 'assets/Bite.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Expunger',
		image: 'assets/Expunger.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Insight',
		image: 'assets/Insight.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'J.A.X.',
		image: 'assets/J.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Miracle',
		image: 'assets/Miracle.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Omega',
		image: 'assets/Omega.webp',
		rarity: 'Special',
		type: 'Power',
		energy: '3',
		owner: 'Colorless'
	},
	{
		name: 'Ritual Dagger',
		image: 'assets/RitualDagger.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Safety',
		image: 'assets/Safety.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Shiv',
		image: 'assets/Shiv.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless'
	},
	{
		name: 'Smite',
		image: 'assets/Smite.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless'
	},
	{
		name: 'Through Violence',
		image: 'assets/ThroughViolence.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless'
	}
];
