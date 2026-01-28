function unluckyDelay() {
    const isUnlucky = Math.random() < 0.2;
    if (isUnlucky) {
        return 4300 + Math.random() * (7000 - 4000);
    } else {
        return null;
    }
}

export function delay(min = 2300, max = 3500) {
    let ms = min + Math.random() * (max - min);

    const rare = unluckyDelay();
    if (rare !== null) {
        ms = rare;
    }

    const caller = getCaller();
    console.log(`Delay ${caller} --> ${Number.parseInt(ms)}ms`);

    return new Promise(resolve => setTimeout(resolve, ms));
};



export function getCaller(stackIndex = 3) {
    const stack = new Error().stack;
    const line = stack?.split("\n")[stackIndex]?.trim() || "";
    return line.split("(")[0].trim();
}


export function randomDelay10to30s(minSec = 10, maxSec = 30) {
    const ms = Math.floor(Math.random() * (maxSec - minSec + 1) + minSec) * 1000;
    return new Promise(res => setTimeout(res, ms));
}