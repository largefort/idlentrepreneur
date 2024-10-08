let money = 1000;
let time = 0;
let level = 1;
let xp = 0;
let xpToNextLevel = 100;
let businesses = [];
let achievements = [];

const totalAchievements = 100; // Total number of achievements

// Array of achievement names (100 total, an example list)
const achievementNames = Array.from({ length: totalAchievements }, (_, i) => `Achievement ${i + 1}`);

// Business constructor
class Business {
    constructor(name, cost, revenuePerDay) {
        this.name = name;
        this.cost = cost;
        this.revenuePerDay = revenuePerDay;
        this.totalRevenue = 0;
    }

    // Simulate daily revenue
    generateRevenue() {
        this.totalRevenue += this.revenuePerDay;
        money += this.revenuePerDay;
        addXP(10); // Earn XP for revenue generation
        updateMoneyDisplay();
    }
}

// Function to add XP and handle leveling up
function addXP(amount) {
    xp += amount;
    if (xp >= xpToNextLevel) {
        xp -= xpToNextLevel;
        levelUp();
    }
    updateLevelDisplay();
}

// Function to handle leveling up
function levelUp() {
    level++;
    xpToNextLevel = Math.floor(xpToNextLevel * 1.5); // Increase XP requirement
    unlockAchievements();
    alert(`Congratulations! You've reached level ${level}!`);
}

// Update money display
function updateMoneyDisplay() {
    document.getElementById('money').innerText = money;
}

// Update level and XP display
function updateLevelDisplay() {
    document.getElementById('level').innerText = level;
    document.getElementById('xp').innerText = xp;
    document.getElementById('xpToNextLevel').innerText = xpToNextLevel;
}

// Start a business function
function startBusiness(type) {
    let newBusiness;
    if (type === 'restaurant' && money >= 500) {
        newBusiness = new Business('Restaurant', 500, 50);
        money -= 500;
    } else if (type === 'tech' && money >= 1000) {
        newBusiness = new Business('Tech Company', 1000, 150);
        money -= 1000;
    } else {
        alert('Not enough money to start this business!');
        return;
    }
    businesses.push(newBusiness);
    updateMoneyDisplay();
    updateBusinessList();
}

// Update business list display
function updateBusinessList() {
    const businessList = document.getElementById('business-list');
    businessList.innerHTML = ''; // Clear the list
    businesses.forEach((business, index) => {
        const businessItem = document.createElement('div');
        businessItem.innerText = `${business.name} - Revenue: $${business.totalRevenue}`;
        businessList.appendChild(businessItem);
    });
}

// Time progression and revenue generation
function advanceTime() {
    time++;
    document.getElementById('time').innerText = time;
    businesses.forEach(business => business.generateRevenue());
}

setInterval(advanceTime, 1000); // Progress the time every second

// Array of achievement names and corresponding rewards
const achievementList = [
    { name: "Business Novice", reward: { money: 100, xp: 50 } },               // Achievement 1
    { name: "First Profits", reward: { money: 200, xp: 75 } },                  // Achievement 2
    { name: "Rising Entrepreneur", reward: { money: 300, xp: 100 } },           // Achievement 3
    { name: "Getting Serious", reward: { money: 400, xp: 125 } },               // Achievement 4
    { name: "Small Business Owner", reward: { money: 500, xp: 150 } },          // Achievement 5
    { name: "Local Success", reward: { money: 600, xp: 175 } },                 // Achievement 6
    { name: "First Upgrade", reward: { money: 700, xp: 200 } },                 // Achievement 7
    { name: "Expansion Begins", reward: { money: 800, xp: 225 } },              // Achievement 8
    { name: "Growing Portfolio", reward: { money: 900, xp: 250 } },             // Achievement 9
    { name: "Business Boom!", reward: { money: 1000, xp: 300 } },               // Achievement 10
    { name: "Hitting $10,000", reward: { money: 1500, xp: 350 } },              // Achievement 11
    { name: "Established Brand", reward: { money: 2000, xp: 400 } },            // Achievement 12
    { name: "Hired First Employee", reward: { money: 2500, xp: 450 } },         // Achievement 13
    { name: "Five-Star Review", reward: { money: 3000, xp: 500 } },             // Achievement 14
    { name: "Branching Out", reward: { money: 4000, xp: 550 } },                // Achievement 15
    { name: "The Innovator", reward: { money: 5000, xp: 600 } },                // Achievement 16
    { name: "Restaurant Guru", reward: { money: 6000, xp: 650 } },              // Achievement 17
    { name: "Tech Enthusiast", reward: { money: 7000, xp: 700 } },              // Achievement 18
    { name: "Franchise Starter", reward: { money: 8000, xp: 750 } },            // Achievement 19
    { name: "Hitting $50,000", reward: { money: 10000, xp: 800 } },             // Achievement 20
    { name: "Tech Mogul", reward: { money: 12000, xp: 850 } },                  // Achievement 21
    { name: "Retail Tycoon", reward: { money: 15000, xp: 900 } },               // Achievement 22
    { name: "Expanding Horizons", reward: { money: 18000, xp: 950 } },          // Achievement 23
    { name: "Money Magnet", reward: { money: 21000, xp: 1000 } },               // Achievement 24
    { name: "Real Estate Venture", reward: { money: 25000, xp: 1100 } },        // Achievement 25
    { name: "Hitting $100,000", reward: { money: 30000, xp: 1200 } },           // Achievement 26
    { name: "Startup Superstar", reward: { money: 35000, xp: 1300 } },          // Achievement 27
    { name: "International Expansion", reward: { money: 40000, xp: 1400 } },    // Achievement 28
    { name: "The Negotiator", reward: { money: 50000, xp: 1500 } },             // Achievement 29
    { name: "Building an Empire", reward: { money: 60000, xp: 1600 } },         // Achievement 30
    { name: "Millionaire's Club", reward: { money: 70000, xp: 1700 } },         // Achievement 31
    { name: "World Domination", reward: { money: 80000, xp: 1800 } },           // Achievement 32
    { name: "Business Titan", reward: { money: 90000, xp: 1900 } },             // Achievement 33
    { name: "Maxed Out Restaurant", reward: { money: 100000, xp: 2000 } },      // Achievement 34
    { name: "Tech Giant", reward: { money: 120000, xp: 2200 } },                // Achievement 35
    { name: "Achieved Global Presence", reward: { money: 150000, xp: 2400 } },   // Achievement 36
    { name: "Industry Leader", reward: { money: 200000, xp: 2600 } },           // Achievement 37
    { name: "Hitting $500,000", reward: { money: 250000, xp: 2800 } },          // Achievement 38
    { name: "The Franchise King", reward: { money: 300000, xp: 3000 } },        // Achievement 39
    { name: "Real Estate Tycoon", reward: { money: 350000, xp: 3200 } },        // Achievement 40
    { name: "Billionaire Visionary", reward: { money: 400000, xp: 3500 } },     // Achievement 41
    { name: "Next Level Entrepreneur", reward: { money: 450000, xp: 3700 } },    // Achievement 42
    { name: "Corporate Mastermind", reward: { money: 500000, xp: 4000 } },      // Achievement 43
    { name: "Master of Negotiation", reward: { money: 600000, xp: 4300 } },     // Achievement 44
    { name: "Expansion Expert", reward: { money: 700000, xp: 4500 } },          // Achievement 45
    { name: "Retail Empire", reward: { money: 800000, xp: 4800 } },             // Achievement 46
    { name: "Global Brand", reward: { money: 900000, xp: 5000 } },              // Achievement 47
    { name: "Tech Innovator", reward: { money: 1000000, xp: 5500 } },           // Achievement 48
    { name: "Entrepreneur Extraordinaire", reward: { money: 1200000, xp: 6000 } }, // Achievement 49
    { name: "King of Commerce", reward: { money: 1400000, xp: 6500 } },         // Achievement 50
    { name: "The CEO", reward: { money: 1600000, xp: 7000 } },                  // Achievement 51
    { name: "Business Legacy", reward: { money: 1800000, xp: 7500 } },          // Achievement 52
    { name: "The Strategist", reward: { money: 2000000, xp: 8000 } },           // Achievement 53
    { name: "Corporate Expansionist", reward: { money: 2500000, xp: 8500 } },   // Achievement 54
    { name: "Mergers and Acquisitions", reward: { money: 3000000, xp: 9000 } }, // Achievement 55
    { name: "Tech Revolution", reward: { money: 3500000, xp: 9500 } },          // Achievement 56
    { name: "Billionaire Club", reward: { money: 4000000, xp: 10000 } },        // Achievement 57
    { name: "Master of Expansion", reward: { money: 4500000, xp: 11000 } },     // Achievement 58
    { name: "The Business Guru", reward: { money: 5000000, xp: 12000 } },       // Achievement 59
    { name: "Visionary Leader", reward: { money: 6000000, xp: 13000 } },        // Achievement 60
    { name: "Strategic Genius", reward: { money: 7000000, xp: 14000 } },        // Achievement 61
    { name: "Maxed Out Tech Company", reward: { money: 8000000, xp: 15000 } },  // Achievement 62
    { name: "Achieved $1,000,000", reward: { money: 9000000, xp: 16000 } },     // Achievement 63
    { name: "Elite Entrepreneur", reward: { money: 10000000, xp: 17000 } },     // Achievement 64
    { name: "Leading Innovator", reward: { money: 12000000, xp: 18000 } },      // Achievement 65
    { name: "Corporate Giant", reward: { money: 14000000, xp: 19000 } },        // Achievement 66
    { name: "Master Franchise", reward: { money: 16000000, xp: 20000 } },       // Achievement 67
    { name: "Global Influence", reward: { money: 18000000, xp: 21000 } },       // Achievement 68
    { name: "Billionaire Businessman", reward: { money: 20000000, xp: 22000 } }, // Achievement 69
    { name: "Hitting $10,000,000", reward: { money: 25000000, xp: 23000 } },    // Achievement 70
    { name: "Business Tycoon", reward: { money: 30000000, xp: 24000 } },        // Achievement 71
    { name: "Global Dominance", reward: { money: 35000000, xp: 25000 } },       // Achievement 72
    { name: "Ultimate CEO", reward: { money: 40000000, xp: 26000 } },           // Achievement 73
    { name: "Financial Powerhouse", reward: { money: 45000000, xp: 27000 } },   // Achievement 74
    { name: "Global Empire", reward: { money: 50000000, xp: 28000 } },          // Achievement 75
    { name: "The Next Big Thing", reward: { money: 60000000, xp: 29000 } },     // Achievement 76
    { name: "Multi-Billionaire", reward: { money: 70000000, xp: 30000 } },      // Achievement 77
    { name: "Tech Disruptor", reward: { money: 80000000, xp: 31000 } },         // Achievement 78
    { name: "The Mogul", reward: { money: 90000000, xp: 32000 } },              // Achievement 79
    { name: "Real Estate Giant", reward: { money: 100000000, xp: 33000 } },     // Achievement 80
    { name: "International Mogul", reward: { money: 120000000, xp: 34000 } },   // Achievement 81
    { name: "World Leader", reward: { money: 150000000, xp: 35000 } },          // Achievement 82
    { name: "The Financier", reward: { money: 200000000, xp: 36000 } },         // Achievement 83
    { name: "Hitting $100,000,000", reward: { money: 250000000, xp: 37000 } },  // Achievement 84
    { name: "Complete Dominance", reward: { money: 300000000, xp: 38000 } },    // Achievement 85
    { name: "The Pioneer", reward: { money: 400000000, xp: 39000 } },           // Achievement 86
    { name: "Strategic Overlord", reward: { money: 500000000, xp: 40000 } },    // Achievement 87
    { name: "Legendary Investor", reward: { money: 600000000, xp: 41000 } },    // Achievement 88
    { name: "Business Conqueror", reward: { money: 700000000, xp: 42000 } },    // Achievement 89
    { name: "Top of the World", reward: { money: 800000000, xp: 43000 } },      // Achievement 90
    { name: "Global Capitalist", reward: { money: 900000000, xp: 44000 } },     // Achievement 91
    { name: "Empire Builder", reward: { money: 1000000000, xp: 45000 } },       // Achievement 92
    { name: "Entrepreneurial Icon", reward: { money: 1200000000, xp: 46000 } }, // Achievement 93
    { name: "Master of Wealth", reward: { money: 1400000000, xp: 47000 } },     // Achievement 94
    { name: "Visionary Empire", reward: { money: 1600000000, xp: 48000 } },     // Achievement 95
    { name: "The Ultimate Tycoon", reward: { money: 2000000000, xp: 49000 } },   // Achievement 96
    { name: "Master of the Universe", reward: { money: 2500000000, xp: 50000 } }, // Achievement 97
    { name: "Limitless Wealth", reward: { money: 3000000000, xp: 51000 } },      // Achievement 98
    { name: "The Pinnacle of Success", reward: { money: 3500000000, xp: 52000 } }, // Achievement 99
    { name: "Ultimate Entrepreneur", reward: { money: 4000000000, xp: 53000 } }   // Achievement 100
];

let achievements = [];

// Function to initialize achievements
function initializeAchievements() {
    for (let i = 0; i < achievementList.length; i++) {
        achievements.push({
            name: achievementList[i].name,
            unlocked: false,
            requirement: { level: Math.floor(i / 10) + 1 }, // Example: unlock every 10 levels
            reward: achievementList[i].reward // Store the reward for each achievement
        });
    }
    updateAchievementList();
}

// Function to unlock achievements based on player progression
function unlockAchievements() {
    achievements.forEach((achievement) => {
        if (!achievement.unlocked && level >= achievement.requirement.level) {
            achievement.unlocked = true;
            giveAchievementReward(achievement.reward);
            alert(`Unlocked: ${achievement.name}!\nReward: $${achievement.reward.money} and ${achievement.reward.xp} XP!`);
        }
    });
    updateAchievementList();
}

// Function to apply achievement rewards
function giveAchievementReward(reward) {
    money += reward.money; // Add money reward
    addXP(reward.xp);      // Add XP reward
    updateMoneyDisplay();  // Update the player's money display
}

// Update achievement list in the UI
function updateAchievementList() {
    const achievementListElement = document.getElementById('achievement-list');
    achievementListElement.innerHTML = ''; // Clear the list

    achievements.forEach((achievement) => {
        const achievementItem = document.createElement('li');
        achievementItem.innerText = achievement.name;
        achievementItem.classList.add(achievement.unlocked ? 'unlocked' : 'locked');
        achievementListElement.appendChild(achievementItem);
    });
}

// Unlock achievements based on level
function unlockAchievements() {
    achievements.forEach((achievement) => {
        if (!achievement.unlocked && level >= achievement.requirement.level) {
            achievement.unlocked = true;
        }
    });
    updateAchievementList();
}

// Initialize game
initializeAchievements();

