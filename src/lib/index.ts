export type Card = {
	name: string;
	image: string;
	rarity: string;
	type: string;
	energy: string;
	owner: string;
	attributes: {
		keywords: string[];
		numbers: number[];
	};
};

export const cards: Card[] = [
	{
		name: 'Bash',
		image: 'assets/Bash.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Vulnerable'],
			numbers: [8, 2]
		}
	},
	{
		name: 'Defend',
		image: 'assets/Defend_R.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: [5]
		}
	},
	{
		name: 'Strike',
		image: 'assets/Strike_R.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Anger',
		image: 'assets/Anger.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Armaments',
		image: 'assets/Armaments.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'ALL', 'Upgrade'],
			numbers: [5]
		}
	},
	{
		name: 'Body Slam',
		image: 'assets/BodySlam.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: []
		}
	},
	{
		name: 'Clash',
		image: 'assets/Clash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Attack'],
			numbers: [14]
		}
	},
	{
		name: 'Cleave',
		image: 'assets/Cleave.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['ALL'],
			numbers: [8]
		}
	},
	{
		name: 'Clothesline',
		image: 'assets/Clothesline.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Weak'],
			numbers: [12, 2]
		}
	},
	{
		name: 'Flex',
		image: 'assets/Flex.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength'],
			numbers: [2, 2]
		}
	},
	{
		name: 'Havoc',
		image: 'assets/Havoc.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Headbutt',
		image: 'assets/Headbutt.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [9]
		}
	},
	{
		name: 'Heavy Blade',
		image: 'assets/HeavyBlade.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength'],
			numbers: [14, 3]
		}
	},
	{
		name: 'Iron Wave',
		image: 'assets/IronWave.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: [5, 5]
		}
	},
	{
		name: 'Perfected Strike',
		image: 'assets/PerfectedStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['ALL'],
			numbers: [6, 2]
		}
	},
	{
		name: 'Pommel Strike',
		image: 'assets/PommelStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Draw'],
			numbers: [9, 1]
		}
	},
	{
		name: 'Shrug it Off',
		image: 'assets/ShrugItOff.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'Draw'],
			numbers: [8, 1]
		}
	},
	{
		name: 'Sword Boomerang',
		image: 'assets/SwordBoomerang.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['random'],
			numbers: [3, 3]
		}
	},
	{
		name: 'Thunderclap',
		image: 'assets/Thunderclap.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Vulnerable', 'ALL'],
			numbers: [4, 1]
		}
	},
	{
		name: 'True Grit',
		image: 'assets/TrueGrit.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Block', 'random'],
			numbers: [7]
		}
	},
	{
		name: 'Twin Strike',
		image: 'assets/TwinStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [5]
		}
	},
	{
		name: 'Warcry',
		image: 'assets/Warcry.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: [1]
		}
	},
	{
		name: 'Wild Strike',
		image: 'assets/WildStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [12]
		}
	},
	{
		name: 'Battle Trance',
		image: 'assets/BattleTrance.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Draw'],
			numbers: [3]
		}
	},
	{
		name: 'Blood for Blood',
		image: 'assets/BloodforBlood.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '4',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [1, 18]
		}
	},
	{
		name: 'Bloodletting',
		image: 'assets/Bloodletting.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Energy'],
			numbers: [3, 2]
		}
	},
	{
		name: 'Burning Pact',
		image: 'assets/BurningPact.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: [1, 2]
		}
	},
	{
		name: 'Carnage',
		image: 'assets/Carnage.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Ethereal'],
			numbers: [20]
		}
	},
	{
		name: 'Combust',
		image: 'assets/Combust.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['ALL'],
			numbers: [1, 5]
		}
	},
	{
		name: 'Dark Embrace',
		image: 'assets/DarkEmbrace.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [1]
		}
	},
	{
		name: 'Disarm',
		image: 'assets/Disarm.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Strength'],
			numbers: [2]
		}
	},
	{
		name: 'Dropkick',
		image: 'assets/Dropkick.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Vulnerable'],
			numbers: [5, 1, 1]
		}
	},
	{
		name: 'Dual Wield',
		image: 'assets/DualWield.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Attack', 'Power'],
			numbers: []
		}
	},
	{
		name: 'Entrench',
		image: 'assets/Entrench.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'Double'],
			numbers: []
		}
	},
	{
		name: 'Evolve',
		image: 'assets/Evolve.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Status'],
			numbers: [1]
		}
	},
	{
		name: 'Feel No Pain',
		image: 'assets/FeelNoPain.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [3]
		}
	},
	{
		name: 'Fire Breathing',
		image: 'assets/FireBreathing.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Status', 'Curse'],
			numbers: [6]
		}
	},
	{
		name: 'Flame Barrier',
		image: 'assets/FlameBarrier.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: [12, 4]
		}
	},
	{
		name: 'Ghostly Armor',
		image: 'assets/GhostlyArmor.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'Ethereal'],
			numbers: [10]
		}
	},
	{
		name: 'Hemokinesis',
		image: 'assets/Hemokinesis.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [2, 15]
		}
	},
	{
		name: 'Infernal Blade',
		image: 'assets/InfernalBlade.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Attack', 'random'],
			numbers: [0]
		}
	},
	{
		name: 'Inflame',
		image: 'assets/Inflame.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength'],
			numbers: [2]
		}
	},
	{
		name: 'Intimidate',
		image: 'assets/Intimidate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Weak', 'ALL'],
			numbers: [1]
		}
	},
	{
		name: 'Metallicize',
		image: 'assets/Metallicize.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: [3]
		}
	},
	{
		name: 'Power Through',
		image: 'assets/PowerThrough.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: [2, 15]
		}
	},
	{
		name: 'Pummel',
		image: 'assets/Pummel.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [2, 4]
		}
	},
	{
		name: 'Rage',
		image: 'assets/Rage.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'Attack'],
			numbers: [3]
		}
	},
	{
		name: 'Rampage',
		image: 'assets/Rampage.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [8, 5]
		}
	},
	{
		name: 'Reckless Charge',
		image: 'assets/RecklessCharge.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [7]
		}
	},
	{
		name: 'Rupture',
		image: 'assets/Rupture.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength'],
			numbers: [1]
		}
	},
	{
		name: 'Searing Blow',
		image: 'assets/SearingBlow.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [12]
		}
	},
	{
		name: 'Second Wind',
		image: 'assets/SecondWind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Block', 'Attack'],
			numbers: [5]
		}
	},
	{
		name: 'Seeing Red',
		image: 'assets/SeeingRed.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [2]
		}
	},
	{
		name: 'Sentinel',
		image: 'assets/Sentinel.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [5, 2]
		}
	},
	{
		name: 'Sever Soul',
		image: 'assets/SeverSoul.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Attack'],
			numbers: [16]
		}
	},
	{
		name: 'Shockwave',
		image: 'assets/Shockwave.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Vulnerable', 'Weak', 'ALL'],
			numbers: [3]
		}
	},
	{
		name: 'Spot Weakness',
		image: 'assets/SpotWeakness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength'],
			numbers: [3]
		}
	},
	{
		name: 'Uppercut',
		image: 'assets/Uppercut.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Vulnerable', 'Weak'],
			numbers: [13, 1, 1]
		}
	},
	{
		name: 'Whirlwind',
		image: 'assets/Whirlwind.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: 'X',
		owner: 'Ironclad',
		attributes: {
			keywords: ['ALL'],
			numbers: [5]
		}
	},
	{
		name: 'Barricade',
		image: 'assets/Barricade.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block'],
			numbers: []
		}
	},
	{
		name: 'Berserk',
		image: 'assets/Berserk.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Vulnerable', 'Energy', 'At the start'],
			numbers: [2, 1]
		}
	},
	{
		name: 'Bludgeon',
		image: 'assets/Bludgeon.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Ironclad',
		attributes: {
			keywords: [],
			numbers: [32]
		}
	},
	{
		name: 'Brutality',
		image: 'assets/Brutality.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Innate', 'At the start'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Corruption',
		image: 'assets/Corruption.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Skill'],
			numbers: [0]
		}
	},
	{
		name: 'Demon Form',
		image: 'assets/DemonForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Strength', 'At the start'],
			numbers: [2]
		}
	},
	{
		name: 'Double Tap',
		image: 'assets/DoubleTap.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Attack'],
			numbers: []
		}
	},
	{
		name: 'Exhume',
		image: 'assets/Exhume.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Feed',
		image: 'assets/Feed.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [10, 3]
		}
	},
	{
		name: 'Fiend Fire',
		image: 'assets/FiendFire.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [7]
		}
	},
	{
		name: 'Immolate',
		image: 'assets/Immolate.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['ALL'],
			numbers: [21]
		}
	},
	{
		name: 'Impervious',
		image: 'assets/Impervious.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [30]
		}
	},
	{
		name: 'Juggernaut',
		image: 'assets/Juggernaut.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Block', 'random'],
			numbers: [5]
		}
	},
	{
		name: 'Limit Break',
		image: 'assets/LimitBreak.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Strength', 'Double'],
			numbers: []
		}
	},
	{
		name: 'Offering',
		image: 'assets/Offering.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: [6, 2, 3]
		}
	},
	{
		name: 'Reaper',
		image: 'assets/Reaper.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Ironclad',
		attributes: {
			keywords: ['Exhaust', 'ALL'],
			numbers: [4]
		}
	},
	{
		name: 'Defend',
		image: 'assets/Defend_G.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [5]
		}
	},
	{
		name: 'Neutralize',
		image: 'assets/Neutralize.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Weak'],
			numbers: [3, 1]
		}
	},
	{
		name: 'Strike',
		image: 'assets/Strike_G.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Survivor',
		image: 'assets/Survivor.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [8]
		}
	},
	{
		name: 'Acrobatics',
		image: 'assets/Acrobatics.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [3, 1]
		}
	},
	{
		name: 'Backflip',
		image: 'assets/Backflip.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block', 'Draw'],
			numbers: [5, 2]
		}
	},
	{
		name: 'Bane',
		image: 'assets/Bane.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Poison'],
			numbers: [7, 7]
		}
	},
	{
		name: 'Blade Dance',
		image: 'assets/BladeDance.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Shiv'],
			numbers: [3]
		}
	},
	{
		name: 'Cloak And Dagger',
		image: 'assets/CloakAndDagger.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block', 'Shiv'],
			numbers: [6, 1]
		}
	},
	{
		name: 'Dagger Spray',
		image: 'assets/DaggerSpray.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL'],
			numbers: [4]
		}
	},
	{
		name: 'Dagger Throw',
		image: 'assets/R_dagger-throw.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [9, 1, 1]
		}
	},
	{
		name: 'Deadly Poison',
		image: 'assets/DeadlyPoison.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Poison'],
			numbers: [5]
		}
	},
	{
		name: 'Deflect',
		image: 'assets/Deflect.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [4]
		}
	},
	{
		name: 'Dodge and Roll',
		image: 'assets/DodgeandRoll.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [4, 4]
		}
	},
	{
		name: 'Flying Knee',
		image: 'assets/FlyingKnee.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [8, 1]
		}
	},
	{
		name: 'Outmaneuver',
		image: 'assets/Outmaneuver.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [2]
		}
	},
	{
		name: 'Piercing Wail',
		image: 'assets/PiercingWail.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Strength', 'ALL'],
			numbers: [6, 1]
		}
	},
	{
		name: 'Poisoned Stab',
		image: 'assets/PoisonedStab.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Poison'],
			numbers: [6, 3]
		}
	},
	{
		name: 'Prepared',
		image: 'assets/Prepared.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Quick Slash',
		image: 'assets/QuickSlash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [8, 1]
		}
	},
	{
		name: 'Slice',
		image: 'assets/Slice.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Sneaky Strike',
		image: 'assets/SneakyStrike.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [12, 2]
		}
	},
	{
		name: 'Sucker Punch',
		image: 'assets/SuckerPunch.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Weak'],
			numbers: [7, 1]
		}
	},
	{
		name: 'Accuracy',
		image: 'assets/Accuracy.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Shiv'],
			numbers: [4]
		}
	},
	{
		name: 'All-Out Attack',
		image: 'assets/All-OutAttack.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL', 'random'],
			numbers: [10, 1]
		}
	},
	{
		name: 'Backstab',
		image: 'assets/Backstab.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Innate'],
			numbers: [11]
		}
	},
	{
		name: 'Blur',
		image: 'assets/Blur.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [5]
		}
	},
	{
		name: 'Bouncing Flask',
		image: 'assets/BouncingFlask.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Poison', 'random'],
			numbers: [3, 3]
		}
	},
	{
		name: 'Calculated Gamble',
		image: 'assets/CalculatedGamble.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Caltrops',
		image: 'assets/Caltrops.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [3]
		}
	},
	{
		name: 'Catalyst',
		image: 'assets/Catalyst.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Poison', 'Double'],
			numbers: []
		}
	},
	{
		name: 'Choke',
		image: 'assets/Choke.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [12, 3]
		}
	},
	{
		name: 'Concentrate',
		image: 'assets/Concentrate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [3, 2]
		}
	},
	{
		name: 'Crippling Cloud',
		image: 'assets/CripplingCloud.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Weak', 'ALL', 'Poison'],
			numbers: [4, 2]
		}
	},
	{
		name: 'Dash',
		image: 'assets/Dash.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Block'],
			numbers: [10, 10]
		}
	},
	{
		name: 'Distraction',
		image: 'assets/Distraction.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Skill', 'random'],
			numbers: [0]
		}
	},
	{
		name: 'Endless Agony',
		image: 'assets/EndlessAgony.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [4]
		}
	},
	{
		name: 'Escape Plan',
		image: 'assets/EscapePlan.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Block', 'Skill', 'Draw'],
			numbers: [1, 3]
		}
	},
	{
		name: 'Eviscerate',
		image: 'assets/Eviscerate.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '3',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [1, 7]
		}
	},
	{
		name: 'Expertise',
		image: 'assets/Expertise.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [6]
		}
	},
	{
		name: 'Finisher',
		image: 'assets/Finisher.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Attack'],
			numbers: [6]
		}
	},
	{
		name: 'Flechettes',
		image: 'assets/Flechettes.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Skill'],
			numbers: [4]
		}
	},
	{
		name: 'Footwork',
		image: 'assets/Footwork.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Dexterity'],
			numbers: [2]
		}
	},
	{
		name: 'Heel Hook',
		image: 'assets/HeelHook.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Weak', 'Energy'],
			numbers: [5, 1, 1]
		}
	},
	{
		name: 'Infinite Blades',
		image: 'assets/InfiniteBlades.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Innate', 'Shiv', 'At the start'],
			numbers: []
		}
	},
	{
		name: 'Leg Sweep',
		image: 'assets/LegSweep.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Weak', 'Block'],
			numbers: [2, 11]
		}
	},
	{
		name: 'Masterful Stab',
		image: 'assets/MasterfulStab.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [1, 12]
		}
	},
	{
		name: 'Noxious Fumes',
		image: 'assets/NoxiousFumes.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL', 'Poison', 'At the start'],
			numbers: [2]
		}
	},
	{
		name: 'Predator',
		image: 'assets/Predator.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Draw'],
			numbers: [15, 2]
		}
	},
	{
		name: 'Reflex',
		image: 'assets/Reflex.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '',
		owner: 'Silent',
		attributes: {
			keywords: ['Unplayable'],
			numbers: [2]
		}
	},
	{
		name: 'Riddle With Holes',
		image: 'assets/RiddleWithHoles.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [3, 5]
		}
	},
	{
		name: 'Setup',
		image: 'assets/Setup.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [0]
		}
	},
	{
		name: 'Skewer',
		image: 'assets/Skewer.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: 'X',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [7]
		}
	},
	{
		name: 'Tactician',
		image: 'assets/Tactician.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy', 'Unplayable'],
			numbers: [1]
		}
	},
	{
		name: 'Terror',
		image: 'assets/Terror.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Vulnerable'],
			numbers: [99]
		}
	},
	{
		name: 'Well-Laid Plans',
		image: 'assets/Well-LaidPlans.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Retain'],
			numbers: [1]
		}
	},
	{
		name: 'A Thousand Cuts',
		image: 'assets/AThousandCuts.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL'],
			numbers: [1]
		}
	},
	{
		name: 'Adrenaline',
		image: 'assets/Adrenaline.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Draw', 'Energy'],
			numbers: [1, 2]
		}
	},
	{
		name: 'After Image',
		image: 'assets/AfterImage.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Block', 'Innate'],
			numbers: [1]
		}
	},
	{
		name: 'Alchemize',
		image: 'assets/Alchemize.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'random'],
			numbers: []
		}
	},
	{
		name: 'Bullet Time',
		image: 'assets/BulletTime.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [0]
		}
	},
	{
		name: 'Burst',
		image: 'assets/Burst.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Skill'],
			numbers: [1]
		}
	},
	{
		name: 'Corpse Explosion',
		image: 'assets/CorpseExplosion.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL', 'Poison'],
			numbers: [6]
		}
	},
	{
		name: 'Die Die Die',
		image: 'assets/DieDieDie.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'ALL'],
			numbers: [13]
		}
	},
	{
		name: 'Doppelganger',
		image: 'assets/Doppelganger.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Silent',
		attributes: {
			keywords: ['Energy'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Envenom',
		image: 'assets/Envenom.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Silent',
		attributes: {
			keywords: ['Poison'],
			numbers: [1]
		}
	},
	{
		name: 'Glass Knife',
		image: 'assets/GlassKnife.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: [],
			numbers: [8, 2]
		}
	},
	{
		name: 'Grand Finale',
		image: 'assets/GrandFinale.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '0',
		owner: 'Silent',
		attributes: {
			keywords: ['ALL'],
			numbers: [50]
		}
	},
	{
		name: 'Malaise',
		image: 'assets/Malaise.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust', 'Weak', 'Strength'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Nightmare',
		image: 'assets/Nightmare.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Silent',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [3]
		}
	},
	{
		name: 'Phantasmal Killer',
		image: 'assets/PhantasmalKiller.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Attack'],
			numbers: []
		}
	},
	{
		name: 'Storm of Steel',
		image: 'assets/StormofSteel.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Shiv'],
			numbers: [1]
		}
	},
	{
		name: 'Tools of the Trade',
		image: 'assets/ToolsoftheTrade.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['At the start'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Unload',
		image: 'assets/Unload.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Silent',
		attributes: {
			keywords: ['Attack'],
			numbers: [14]
		}
	},
	{
		name: 'Wraith Form',
		image: 'assets/WraithForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Silent',
		attributes: {
			keywords: ['Dexterity', 'Intangible'],
			numbers: [2, 1]
		}
	},
	{
		name: 'Defend',
		image: 'assets/Defend_B.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [5]
		}
	},
	{
		name: 'Dualcast',
		image: 'assets/Dualcast.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Evoke', 'Orb'],
			numbers: []
		}
	},
	{
		name: 'Strike',
		image: 'assets/Strike_B.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Zap',
		image: 'assets/Zap.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Lightning'],
			numbers: [1]
		}
	},
	{
		name: 'Ball Lightning',
		image: 'assets/BallLightning.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Lightning'],
			numbers: [7, 1]
		}
	},
	{
		name: 'Barrage',
		image: 'assets/Barrage.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Orb'],
			numbers: [4]
		}
	},
	{
		name: 'Beam Cell',
		image: 'assets/BeamCell.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Vulnerable'],
			numbers: [3, 1]
		}
	},
	{
		name: 'Charge Battery',
		image: 'assets/ChargeBattery.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block', 'Energy'],
			numbers: [7, 1]
		}
	},
	{
		name: 'Claw',
		image: 'assets/Claw.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['ALL'],
			numbers: [3, 2]
		}
	},
	{
		name: 'Cold Snap',
		image: 'assets/ColdSnap.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Frost'],
			numbers: [6, 1]
		}
	},
	{
		name: 'Compile Driver',
		image: 'assets/CompileDriver.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw', 'Orb'],
			numbers: [7, 1]
		}
	},
	{
		name: 'Coolheaded',
		image: 'assets/Coolheaded.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw', 'Channel', 'Frost'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Go for the Eyes',
		image: 'assets/GofortheEyes.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Weak'],
			numbers: [3, 1]
		}
	},
	{
		name: 'Hologram',
		image: 'assets/Hologram-0.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [3]
		}
	},
	{
		name: 'Leap',
		image: 'assets/Leap.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [9]
		}
	},
	{
		name: 'Rebound',
		image: 'assets/Rebound.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [9]
		}
	},
	{
		name: 'Recursion',
		image: 'assets/Recursion.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Evoke', 'Channel', 'Orb'],
			numbers: []
		}
	},
	{
		name: 'Stack',
		image: 'assets/Stack.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [3]
		}
	},
	{
		name: 'Steam Barrier',
		image: 'assets/SteamBarrier.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [6, 1]
		}
	},
	{
		name: 'Streamline',
		image: 'assets/Streamline.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [15, 1]
		}
	},
	{
		name: 'Sweeping Beam',
		image: 'assets/SweepingBeam.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw', 'ALL'],
			numbers: [6, 1]
		}
	},
	{
		name: 'TURBO',
		image: 'assets/TURBO.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Energy'],
			numbers: [2]
		}
	},
	{
		name: 'Aggregate',
		image: 'assets/Aggregate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Energy'],
			numbers: [1, 4]
		}
	},
	{
		name: 'Auto-Shields',
		image: 'assets/Auto-Shields.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [11]
		}
	},
	{
		name: 'Blizzard',
		image: 'assets/Blizzard.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['ALL', 'Channel', 'Frost'],
			numbers: [2]
		}
	},
	{
		name: 'Boot Sequence',
		image: 'assets/BootSequence.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Block', 'Innate'],
			numbers: [10]
		}
	},
	{
		name: 'Bullseye',
		image: 'assets/BullsEye.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Lock-On'],
			numbers: [8, 2]
		}
	},
	{
		name: 'Capacitor',
		image: 'assets/Capacitor.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Orb'],
			numbers: [2]
		}
	},
	{
		name: 'Chaos',
		image: 'assets/Chaos.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Orb', 'random'],
			numbers: [1]
		}
	},
	{
		name: 'Chill',
		image: 'assets/Chill.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Innate', 'Channel', 'Frost'],
			numbers: [1]
		}
	},
	{
		name: 'Consume',
		image: 'assets/Consume.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['Orb', 'Focus'],
			numbers: [2, 1]
		}
	},
	{
		name: 'Darkness',
		image: 'assets/Darkness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Dark'],
			numbers: [1]
		}
	},
	{
		name: 'Defragment',
		image: 'assets/Defragment.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Focus'],
			numbers: [1]
		}
	},
	{
		name: 'Doom and Gloom',
		image: 'assets/DoomandGloom.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['ALL', 'Channel', 'Dark'],
			numbers: [10, 1]
		}
	},
	{
		name: 'Double Energy',
		image: 'assets/DoubleEnergy.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Energy', 'Double'],
			numbers: []
		}
	},
	{
		name: 'Equilibrium',
		image: 'assets/Equilibrium.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['Block', 'Retain'],
			numbers: [13]
		}
	},
	{
		name: 'FTL',
		image: 'assets/FTL.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [5, 3, 1]
		}
	},
	{
		name: 'Force Field',
		image: 'assets/ForceField.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '4',
		owner: 'Defect',
		attributes: {
			keywords: ['Block', 'Power', 'Energy'],
			numbers: [1, 12]
		}
	},
	{
		name: 'Fusion',
		image: 'assets/Fusion.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Plasma'],
			numbers: [1]
		}
	},
	{
		name: 'Genetic Algorithm',
		image: 'assets/GeneticAlgorithm.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [1, 2]
		}
	},
	{
		name: 'Glacier',
		image: 'assets/Glacier.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['Block', 'Channel', 'Frost'],
			numbers: [7, 2]
		}
	},
	{
		name: 'Heatsinks',
		image: 'assets/Heatsinks.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Power'],
			numbers: [1]
		}
	},
	{
		name: 'Hello World',
		image: 'assets/HelloWorld.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Innate', 'At the start', 'random'],
			numbers: []
		}
	},
	{
		name: 'Loop',
		image: 'assets/Loop.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Orb', 'At the start'],
			numbers: [2]
		}
	},
	{
		name: 'Melter',
		image: 'assets/Melter.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [10]
		}
	},
	{
		name: 'Overclock',
		image: 'assets/Overclock.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw'],
			numbers: [2]
		}
	},
	{
		name: 'Recycle',
		image: 'assets/Recycle.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Energy'],
			numbers: []
		}
	},
	{
		name: 'Reinforced Body',
		image: 'assets/ReinforcedBody.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect',
		attributes: {
			keywords: ['Block'],
			numbers: [7]
		}
	},
	{
		name: 'Reprogram',
		image: 'assets/Reprogram.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Strength', 'Dexterity', 'Focus'],
			numbers: [1, 1, 1]
		}
	},
	{
		name: 'Rip and Tear',
		image: 'assets/RipandTear.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['random'],
			numbers: [7, 2]
		}
	},
	{
		name: 'Scrape',
		image: 'assets/Scrape.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw'],
			numbers: [7, 4, 0]
		}
	},
	{
		name: 'Self Repair',
		image: 'assets/SelfRepair.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [7]
		}
	},
	{
		name: 'Skim',
		image: 'assets/Skim.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Draw'],
			numbers: [3]
		}
	},
	{
		name: 'Static Discharge',
		image: 'assets/StaticDischarge.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Lightning'],
			numbers: [1]
		}
	},
	{
		name: 'Storm',
		image: 'assets/Storm.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Power', 'Innate', 'Channel', 'Lightning'],
			numbers: [1]
		}
	},
	{
		name: 'Sunder',
		image: 'assets/Sunder.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '3',
		owner: 'Defect',
		attributes: {
			keywords: ['Energy'],
			numbers: [24, 3]
		}
	},
	{
		name: 'Tempest',
		image: 'assets/Tempest.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Channel', 'Lightning'],
			numbers: [1]
		}
	},
	{
		name: 'White Noise',
		image: 'assets/WhiteNoise.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Power', 'random'],
			numbers: [0]
		}
	},
	{
		name: 'All for One',
		image: 'assets/AllforOne.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [10, 0]
		}
	},
	{
		name: 'Amplify',
		image: 'assets/Amplify.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Power'],
			numbers: [1]
		}
	},
	{
		name: 'Biased Cognition',
		image: 'assets/BiasedCognition.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Focus', 'At the start'],
			numbers: [4, 1]
		}
	},
	{
		name: 'Buffer',
		image: 'assets/Buffer.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: [],
			numbers: [1]
		}
	},
	{
		name: 'Core Surge',
		image: 'assets/CoreSurge.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Artifact'],
			numbers: [11, 1]
		}
	},
	{
		name: 'Creative AI',
		image: 'assets/CreativeAI.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Defect',
		attributes: {
			keywords: ['Power', 'At the start', 'random'],
			numbers: []
		}
	},
	{
		name: 'Echo Form',
		image: 'assets/EchoForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Defect',
		attributes: {
			keywords: ['Ethereal'],
			numbers: []
		}
	},
	{
		name: 'Electrodynamics',
		image: 'assets/Electrodynamics.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['ALL', 'Channel', 'Lightning'],
			numbers: [2]
		}
	},
	{
		name: 'Fission',
		image: 'assets/Fission.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'ALL', 'Energy', 'Evoke', 'Orb'],
			numbers: [1, 1]
		}
	},
	{
		name: 'Hyperbeam',
		image: 'assets/Hyperbeam.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['ALL', 'Focus'],
			numbers: [26, 3]
		}
	},
	{
		name: 'Machine Learning',
		image: 'assets/MachineLearning.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Defect',
		attributes: {
			keywords: ['Innate', 'At the start'],
			numbers: [1]
		}
	},
	{
		name: 'Meteor Strike',
		image: 'assets/MeteorStrike.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '5',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Plasma'],
			numbers: [24, 3]
		}
	},
	{
		name: 'Multi-Cast',
		image: 'assets/Multi-Cast.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Defect',
		attributes: {
			keywords: ['Evoke', 'Orb'],
			numbers: [1]
		}
	},
	{
		name: 'Rainbow',
		image: 'assets/Rainbow.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust', 'Channel', 'Lightning', 'Frost', 'Dark'],
			numbers: [1, 1, 1]
		}
	},
	{
		name: 'Reboot',
		image: 'assets/Reboot.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [4]
		}
	},
	{
		name: 'Seek',
		image: 'assets/Seek.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Defect',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Thunder Strike',
		image: 'assets/ThunderStrike.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Defect',
		attributes: {
			keywords: ['Channel', 'Lightning', 'random'],
			numbers: [7]
		}
	},
	{
		name: 'Defend',
		image: 'assets/Defend_P.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block'],
			numbers: [5]
		}
	},
	{
		name: 'Eruption',
		image: 'assets/Eruption.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Wrath'],
			numbers: [9]
		}
	},
	{
		name: 'Strike',
		image: 'assets/Strike_P.webp',
		rarity: 'Starter',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Vigilance',
		image: 'assets/Vigilance.webp',
		rarity: 'Starter',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Calm'],
			numbers: [8]
		}
	},
	{
		name: 'Bowling Bash',
		image: 'assets/BowlingBash.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [7]
		}
	},
	{
		name: 'Consecrate',
		image: 'assets/Consecrate.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['ALL'],
			numbers: [5]
		}
	},
	{
		name: 'Crescendo',
		image: 'assets/Crescendo.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Retain', 'Wrath'],
			numbers: []
		}
	},
	{
		name: 'Crush Joints',
		image: 'assets/CrushJoints.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Vulnerable'],
			numbers: [8, 1]
		}
	},
	{
		name: 'Cut Through Fate',
		image: 'assets/CutThroughFate.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Draw', 'Scry'],
			numbers: [7, 2, 1]
		}
	},
	{
		name: 'Empty Body',
		image: 'assets/EmptyBody.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Stance'],
			numbers: [7]
		}
	},
	{
		name: 'Empty Fist',
		image: 'assets/EmptyFist.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Stance'],
			numbers: [9]
		}
	},
	{
		name: 'Evaluate',
		image: 'assets/Evaluate.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block'],
			numbers: [6]
		}
	},
	{
		name: 'Flurry of Blows',
		image: 'assets/FlurryOfBlows.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Stance'],
			numbers: [4]
		}
	},
	{
		name: 'Flying Sleeves',
		image: 'assets/FlyingSleeves.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain'],
			numbers: [4]
		}
	},
	{
		name: 'Follow-Up',
		image: 'assets/Follow-Up.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Attack', 'Energy'],
			numbers: [7, 1]
		}
	},
	{
		name: 'Halt',
		image: 'assets/Halt.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Wrath'],
			numbers: [3, 9]
		}
	},
	{
		name: 'Just Lucky',
		image: 'assets/JustLucky.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Scry'],
			numbers: [1, 2, 3]
		}
	},
	{
		name: 'Pressure Points',
		image: 'assets/PressurePoints.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['ALL'],
			numbers: [8]
		}
	},
	{
		name: 'Prostrate',
		image: 'assets/Prostrate.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Mantra'],
			numbers: [2, 4]
		}
	},
	{
		name: 'Protect',
		image: 'assets/Protect.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Retain'],
			numbers: [12]
		}
	},
	{
		name: 'Sash Whip',
		image: 'assets/SashWhip.webp',
		rarity: 'Common',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Weak', 'Attack'],
			numbers: [8, 1]
		}
	},
	{
		name: 'Third Eye',
		image: 'assets/ThirdEye.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Scry'],
			numbers: [7, 3]
		}
	},
	{
		name: 'Tranquility',
		image: 'assets/Tranquility.webp',
		rarity: 'Common',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Retain', 'Calm'],
			numbers: []
		}
	},
	{
		name: 'Battle Hymn',
		image: 'assets/BattleHymn.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Innate', 'At the start'],
			numbers: []
		}
	},
	{
		name: 'Carve Reality',
		image: 'assets/CarveReality.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [6]
		}
	},
	{
		name: 'Collect',
		image: 'assets/Collect.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: 'X',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [1]
		}
	},
	{
		name: 'Conclude',
		image: 'assets/Conclude.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['ALL'],
			numbers: [12]
		}
	},
	{
		name: 'Deceive Reality',
		image: 'assets/DeceiveReality.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block'],
			numbers: [4]
		}
	},
	{
		name: 'Empty Mind',
		image: 'assets/EmptyMind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Draw', 'Stance'],
			numbers: [2]
		}
	},
	{
		name: 'Fasting',
		image: 'assets/Fasting.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Strength', 'Energy', 'Dexterity'],
			numbers: [3, 3, 1]
		}
	},
	{
		name: 'Fear No Evil',
		image: 'assets/FearNoEvil.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Attack', 'Calm'],
			numbers: [8]
		}
	},
	{
		name: 'Foreign Influence',
		image: 'assets/ForeignInfluence.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Attack'],
			numbers: [1, 3, 0]
		}
	},
	{
		name: 'Foresight',
		image: 'assets/Foresight.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Scry', 'At the start'],
			numbers: [3]
		}
	},
	{
		name: 'Indignation',
		image: 'assets/Indignation.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Vulnerable', 'ALL', 'Wrath'],
			numbers: [3]
		}
	},
	{
		name: 'Inner Peace',
		image: 'assets/InnerPeace.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Calm'],
			numbers: [3]
		}
	},
	{
		name: 'Like Water',
		image: 'assets/LikeWater.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Calm'],
			numbers: [5]
		}
	},
	{
		name: 'Meditate',
		image: 'assets/Meditate.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain', 'Calm'],
			numbers: [1]
		}
	},
	{
		name: 'Mental Fortress',
		image: 'assets/MentalFortress.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Stance'],
			numbers: [4]
		}
	},
	{
		name: 'Nirvana',
		image: 'assets/Nirvana.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Scry'],
			numbers: [3]
		}
	},
	{
		name: 'Perseverance',
		image: 'assets/Perseverance.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Retain'],
			numbers: [5, 2]
		}
	},
	{
		name: 'Pray',
		image: 'assets/Pray.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Mantra'],
			numbers: [3]
		}
	},
	{
		name: 'Reach Heaven',
		image: 'assets/ReachHeaven.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [10]
		}
	},
	{
		name: 'Rushdown',
		image: 'assets/Rushdown.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Wrath'],
			numbers: [2]
		}
	},
	{
		name: 'Sanctity',
		image: 'assets/Sanctity.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Skill'],
			numbers: [6, 2]
		}
	},
	{
		name: 'Sands of Time',
		image: 'assets/SandsofTime.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '4',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain'],
			numbers: [20, 1]
		}
	},
	{
		name: 'Signature Move',
		image: 'assets/SignatureMove.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [30]
		}
	},
	{
		name: 'Simmering Fury',
		image: 'assets/SimmeringFury.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['At the start', 'Wrath'],
			numbers: [2]
		}
	},
	{
		name: 'Study',
		image: 'assets/Study.webp',
		rarity: 'Uncommon',
		type: 'Power',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: []
		}
	},
	{
		name: 'Swivel',
		image: 'assets/Swivel.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block', 'Attack'],
			numbers: [8, 0]
		}
	},
	{
		name: 'Talk to the Hand',
		image: 'assets/TalktotheHand.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [5, 2]
		}
	},
	{
		name: 'Tantrum',
		image: 'assets/Tantrum.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Wrath'],
			numbers: [3, 3]
		}
	},
	{
		name: 'Wallop',
		image: 'assets/Wallop.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block'],
			numbers: [9]
		}
	},
	{
		name: 'Wave of the Hand',
		image: 'assets/WaveoftheHand.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Weak', 'Block', 'ALL'],
			numbers: [1]
		}
	},
	{
		name: 'Weave',
		image: 'assets/Weave.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Watcher',
		attributes: {
			keywords: ['Scry'],
			numbers: [4]
		}
	},
	{
		name: 'Wheel Kick',
		image: 'assets/WheelKick.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Draw'],
			numbers: [15, 2]
		}
	},
	{
		name: 'Windmill Strike',
		image: 'assets/WindmillStrike.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain'],
			numbers: [7, 4]
		}
	},
	{
		name: 'Worship',
		image: 'assets/Worship.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain', 'Mantra'],
			numbers: [5]
		}
	},
	{
		name: 'Wreath of Flame',
		image: 'assets/WreathofFlame.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Attack'],
			numbers: [5]
		}
	},
	{
		name: 'Alpha',
		image: 'assets/Alpha.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Innate'],
			numbers: []
		}
	},
	{
		name: 'Blasphemy',
		image: 'assets/Blasphemy.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Retain', 'Divinity'],
			numbers: []
		}
	},
	{
		name: 'Brilliance',
		image: 'assets/Brilliance.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Mantra'],
			numbers: [12]
		}
	},
	{
		name: 'Conjure Blade',
		image: 'assets/ConjureBlade.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [1]
		}
	},
	{
		name: 'Deus Ex Machina',
		image: 'assets/DeusExMachina.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'Unplayable',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Unplayable'],
			numbers: [2]
		}
	},
	{
		name: 'Deva Form',
		image: 'assets/DevaForm.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '3',
		owner: 'Watcher',
		attributes: {
			keywords: ['Ethereal', 'Energy', 'At the start'],
			numbers: [1]
		}
	},
	{
		name: 'Devotion',
		image: 'assets/Devotion.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['At the start', 'Mantra'],
			numbers: [2]
		}
	},
	{
		name: 'Establishment',
		image: 'assets/Establishment.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Retain', 'Innate'],
			numbers: [1]
		}
	},
	{
		name: 'Judgment',
		image: 'assets/Judgment.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: [],
			numbers: [30, 0]
		}
	},
	{
		name: 'Lesson Learned',
		image: 'assets/LessonLearned.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Upgrade', 'random'],
			numbers: [10]
		}
	},
	{
		name: 'Master Reality',
		image: 'assets/MasterReality.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Upgrade'],
			numbers: []
		}
	},
	{
		name: 'Omniscience',
		image: 'assets/Omniscience.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '4',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Ragnarok',
		image: 'assets/Ragnarok.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '3',
		owner: 'Watcher',
		attributes: {
			keywords: ['random'],
			numbers: [5, 5]
		}
	},
	{
		name: 'Scrawl',
		image: 'assets/Scrawl.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '1',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: []
		}
	},
	{
		name: 'Spirit Shield',
		image: 'assets/SpiritShield.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Watcher',
		attributes: {
			keywords: ['Block'],
			numbers: [3]
		}
	},
	{
		name: 'Vault',
		image: 'assets/Vault.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Wish',
		image: 'assets/Wish.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '3',
		owner: 'Watcher',
		attributes: {
			keywords: ['Exhaust', 'Strength', 'Plated Armor'],
			numbers: [6, 3, 25]
		}
	},
	{
		name: 'Bandage Up',
		image: 'assets/BandageUp.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [4]
		}
	},
	{
		name: 'Blind',
		image: 'assets/Blind.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Weak', 'ALL'],
			numbers: [2]
		}
	},
	{
		name: 'Dark Shackles',
		image: 'assets/DarkShackles.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Strength'],
			numbers: [9]
		}
	},
	{
		name: 'Deep Breath',
		image: 'assets/DeepBreath.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Draw'],
			numbers: [1]
		}
	},
	{
		name: 'Discovery',
		image: 'assets/Discovery.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'random'],
			numbers: [1, 3, 0]
		}
	},
	{
		name: 'Dramatic Entrance',
		image: 'assets/DramaticEntrance.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'ALL', 'Innate'],
			numbers: [8]
		}
	},
	{
		name: 'Enlightenment',
		image: 'assets/Enlightenment.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [1]
		}
	},
	{
		name: 'Finesse',
		image: 'assets/Finesse.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Block', 'Draw'],
			numbers: [2, 1]
		}
	},
	{
		name: 'Flash of Steel',
		image: 'assets/FlashofSteel.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Draw'],
			numbers: [3, 1]
		}
	},
	{
		name: 'Forethought',
		image: 'assets/Forethought.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [0]
		}
	},
	{
		name: 'Good Instincts',
		image: 'assets/GoodInstincts.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Block'],
			numbers: [6]
		}
	},
	{
		name: 'Impatience',
		image: 'assets/Impatience.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Attack'],
			numbers: [2]
		}
	},
	{
		name: 'Jack Of All Trades',
		image: 'assets/JackOfAllTrades.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'random'],
			numbers: [1]
		}
	},
	{
		name: 'Madness',
		image: 'assets/Madness.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'random'],
			numbers: [0]
		}
	},
	{
		name: 'Mind Blast',
		image: 'assets/MindBlast.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['Innate'],
			numbers: []
		}
	},
	{
		name: 'Panacea',
		image: 'assets/Panacea.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Artifact'],
			numbers: [1]
		}
	},
	{
		name: 'Panic Button',
		image: 'assets/PanicButton.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Block'],
			numbers: [30, 2]
		}
	},
	{
		name: 'Purity',
		image: 'assets/Purity.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [3]
		}
	},
	{
		name: 'Swift Strike',
		image: 'assets/SwiftStrike.webp',
		rarity: 'Uncommon',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [7]
		}
	},
	{
		name: 'Trip',
		image: 'assets/Trip.webp',
		rarity: 'Uncommon',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Vulnerable', 'ALL'],
			numbers: [2]
		}
	},
	{
		name: 'Apotheosis',
		image: 'assets/Apotheosis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'ALL', 'Upgrade'],
			numbers: []
		}
	},
	{
		name: 'Chrysalis',
		image: 'assets/Chrysalis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Skill', 'Draw', 'random'],
			numbers: [3, 0]
		}
	},
	{
		name: 'Hand of Greed',
		image: 'assets/HandOfGreed.webp',
		rarity: 'Rare',
		type: 'Attack',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [20, 20]
		}
	},
	{
		name: 'Magnetism',
		image: 'assets/Magnetism.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['At the start', 'random'],
			numbers: []
		}
	},
	{
		name: 'Master Of Strategy',
		image: 'assets/MasterOfStrategy.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: [3]
		}
	},
	{
		name: 'Mayhem',
		image: 'assets/Mayhem.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['At the start'],
			numbers: []
		}
	},
	{
		name: 'Metamorphosis',
		image: 'assets/Metamorphosis.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Attack', 'Draw', 'random'],
			numbers: [3, 0]
		}
	},
	{
		name: 'Panache',
		image: 'assets/Panache.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['ALL'],
			numbers: [5, 10]
		}
	},
	{
		name: 'Sadistic Nature',
		image: 'assets/SadisticNature.webp',
		rarity: 'Rare',
		type: 'Power',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [5]
		}
	},
	{
		name: 'Secret Technique',
		image: 'assets/SecretTechnique.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Skill'],
			numbers: []
		}
	},
	{
		name: 'Secret Weapon',
		image: 'assets/SecretWeapon.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Attack'],
			numbers: []
		}
	},
	{
		name: 'The Bomb',
		image: 'assets/TheBomb.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['ALL'],
			numbers: [3, 40]
		}
	},
	{
		name: 'Thinking Ahead',
		image: 'assets/ThinkingAhead.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Draw'],
			numbers: [2]
		}
	},
	{
		name: 'Transmutation',
		image: 'assets/Transmutation.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: 'X',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Upgrade', 'random'],
			numbers: [0]
		}
	},
	{
		name: 'Violence',
		image: 'assets/Violence.webp',
		rarity: 'Rare',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Attack', 'random'],
			numbers: [3]
		}
	},
	{
		name: 'Apparition',
		image: 'assets/Apparition.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Ethereal', 'Intangible'],
			numbers: [1]
		}
	},
	{
		name: 'Beta',
		image: 'assets/Beta.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '2',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust'],
			numbers: []
		}
	},
	{
		name: 'Bite',
		image: 'assets/Bite.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [7, 2]
		}
	},
	{
		name: 'Expunger',
		image: 'assets/Expunger.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: [],
			numbers: [9]
		}
	},
	{
		name: 'Insight',
		image: 'assets/Insight.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Draw', 'Retain'],
			numbers: [2]
		}
	},
	{
		name: 'J.A.X.',
		image: 'assets/J.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Strength'],
			numbers: [3, 2]
		}
	},
	{
		name: 'Miracle',
		image: 'assets/Miracle.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Retain', 'Energy'],
			numbers: []
		}
	},
	{
		name: 'Omega',
		image: 'assets/Omega.webp',
		rarity: 'Special',
		type: 'Power',
		energy: '3',
		owner: 'Colorless',
		attributes: {
			keywords: ['ALL'],
			numbers: [50]
		}
	},
	{
		name: 'Ritual Dagger',
		image: 'assets/RitualDagger.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [15, 3]
		}
	},
	{
		name: 'Safety',
		image: 'assets/Safety.webp',
		rarity: 'Special',
		type: 'Skill',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Block', 'Retain'],
			numbers: [12]
		}
	},
	{
		name: 'Shiv',
		image: 'assets/Shiv.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust'],
			numbers: [4]
		}
	},
	{
		name: 'Smite',
		image: 'assets/Smite.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '1',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Retain'],
			numbers: [12]
		}
	},
	{
		name: 'Through Violence',
		image: 'assets/ThroughViolence.webp',
		rarity: 'Special',
		type: 'Attack',
		energy: '0',
		owner: 'Colorless',
		attributes: {
			keywords: ['Exhaust', 'Retain'],
			numbers: [20]
		}
	}
];
