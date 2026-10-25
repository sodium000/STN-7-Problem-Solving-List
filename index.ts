import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Problem 1: Staircase
var staircase = function (n: number): string {
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

// Problem 2: Grading Students
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

// Problem 3: Time Conversion
var timeConversion = function (s: string): string {
  const period = s.slice(-2);
  const hours = Number(s.slice(0, 2));
  const rest = s.slice(2, 8);
  let hour24 = hours;

  if (period === "AM") {
    hour24 = hours === 12 ? 0 : hours;
  } else {
    hour24 = hours === 12 ? 12 : hours + 12;
  }

  return String(hour24).padStart(2, "0") + rest;
};

// Problem 4: String Repeat
var repeatStr = function (n: number, s: string): string {
  return s.repeat(n);
};

// Problem 5: Reversed Strings
var solution = function (str: string): string {
  return str.split("").reverse().join("");
};

// Problem 6: Sum of Positive
var positiveSum = function (arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
};

// Problem 7: Grasshopper — Summation
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};

// Problem 8: Convert a Boolean to a String
var booleanToString = function (b: boolean): string {
  return b ? "true" : "false";
};

// Problem 9: Fizz Buzz
var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

// Problem 10: Running Sum of 1D Array
var runningSum = function (nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;
  for (const n of nums) {
    sum += n;
    result.push(sum);
  }
  return result;
};

// Problem 11: Richest Customer Wealth
var maximumWealth = function (accounts: number[][]): number {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

// Problem 12: Remove Duplicates from Sorted Array
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Problem 13: Contains Duplicate
var containsDuplicate = function (nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
};

// Problem 14: Move Zeroes
var moveZeroes = function (nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }
  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
};

// Problem 15: Merge Sorted Array
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// Problem 16: 3Sum
var threeSum = function (nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Problem 17: Plus One

var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
};

// Problem 18: Reverse String
var reverseString = function (s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// Problem 19: Length of Last Word
var lengthOfLastWord = function (s: string): number {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") length++;
    else if (length > 0) break;
  }
  return length;
};

// Problem 20: Longest Common Prefix
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

const rl = readline.createInterface({ input, output });

async function ask(prompt: string): Promise<string> {
  return (await rl.question(prompt)).trim();
}

function parseNumberArray(text: string): number[] {
  return text
    .replace(/[\[\]]/g, "")
    .split(/[\s,]+/)
    .filter((part) => part.length > 0)
    .map(Number);
}

function parseStringArray(text: string): string[] {
  const trimmed = text.trim();
  if (trimmed.startsWith("[")) {
    return JSON.parse(trimmed.replace(/'/g, '"')) as string[];
  }
  return trimmed
    .split(/[,\s]+/)
    .map((part) => part.replace(/^["']|["']$/g, ""))
    .filter((part) => part.length > 0);
}

function parseNumberMatrix(text: string): number[][] {
  const trimmed = text.trim();
  if (trimmed.startsWith("[")) {
    return JSON.parse(trimmed) as number[][];
  }
  return trimmed
    .split(";")
    .map((row) => parseNumberArray(row))
    .filter((row) => row.length > 0);
}

function parseBoolean(text: string): boolean {
  const value = text.trim().toLowerCase();
  if (value === "true" || value === "1" || value === "yes") return true;
  if (value === "false" || value === "0" || value === "no") return false;
  throw new Error("Enter true or false");
}

async function runProblem(choice: number): Promise<void> {
  switch (choice) {
    case 1: {
      const n = Number(await ask("Enter n (staircase height): "));
      console.log(staircase(n));
      break;
    }
    case 2: {
      const grades = parseNumberArray(await ask("Enter grades (example: 73 67 38 33): "));
      console.log(gradingStudents(grades));
      break;
    }
    case 3: {
      const s = await ask("Enter time (example: 07:05:45PM): ");
      console.log(timeConversion(s));
      break;
    }
    case 4: {
      const n = Number(await ask("Enter n (repeat count): "));
      const s = await ask("Enter string: ");
      console.log(repeatStr(n, s));
      break;
    }
    case 5: {
      const str = await ask("Enter string: ");
      console.log(solution(str));
      break;
    }
    case 6: {
      const arr = parseNumberArray(await ask("Enter numbers (example: 1 -4 7 12): "));
      console.log(positiveSum(arr));
      break;
    }
    case 7: {
      const num = Number(await ask("Enter num: "));
      console.log(summation(num));
      break;
    }
    case 8: {
      const b = parseBoolean(await ask("Enter boolean (true/false): "));
      console.log(booleanToString(b));
      break;
    }
    case 9: {
      const n = Number(await ask("Enter n: "));
      console.log(fizzBuzz(n));
      break;
    }
    case 10: {
      const nums = parseNumberArray(await ask("Enter nums (example: 1 2 3 4): "));
      console.log(runningSum(nums));
      break;
    }
    case 11: {
      const accounts = parseNumberMatrix(
        await ask("Enter accounts as JSON or rows with ; (example: [[1,5],[7,3],[3,5]]): ")
      );
      console.log(maximumWealth(accounts));
      break;
    }
    case 12: {
      const nums = parseNumberArray(await ask("Enter sorted nums (example: 0 0 1 1 1 2 2 3 3 4): "));
      const k = removeDuplicates(nums);
      console.log(k);
      console.log(nums.slice(0, k));
      break;
    }
    case 13: {
      const nums = parseNumberArray(await ask("Enter nums (example: 1 2 3 1): "));
      console.log(containsDuplicate(nums));
      break;
    }
    case 14: {
      const nums = parseNumberArray(await ask("Enter nums (example: 0 1 0 3 12): "));
      moveZeroes(nums);
      console.log(nums);
      break;
    }
    case 15: {
      const valid1 = parseNumberArray(await ask("Enter nums1 valid values (example: 1 2 3): "));
      const nums2 = parseNumberArray(await ask("Enter nums2 (example: 2 5 6): "));
      const m = valid1.length;
      const n = nums2.length;
      const nums1 = [...valid1, ...Array(n).fill(0)];
      merge(nums1, m, nums2, n);
      console.log(nums1);
      break;
    }
    case 16: {
      const nums = parseNumberArray(await ask("Enter nums (example: -1 0 1 2 -1 -4): "));
      console.log(threeSum(nums));
      break;
    }
    case 17: {
      const digits = parseNumberArray(await ask("Enter digits (example: 1 2 9): "));
      console.log(plusOne(digits));
      break;
    }
    case 18: {
      const text = await ask("Enter characters or a word (example: hello or h e l l o): ");
      const s = text.includes(" ") || text.includes(",") ? parseStringArray(text) : text.split("");
      reverseString(s);
      console.log(s);
      break;
    }
    case 19: {
      const s = await ask("Enter sentence: ");
      console.log(lengthOfLastWord(s));
      break;
    }
    case 20: {
      const strs = parseStringArray(
        await ask('Enter strings (example: flower flow flight): ')
      );
      console.log(longestCommonPrefix(strs));
      break;
    }
    default:
      console.log("Choose a number from 1 to 20.");
  }
}

async function main(): Promise<void> {
  console.log("STN-7 Problem Solving Assessment List");
  console.log("Enter 1-20 to solve a problem, or 0 to exit.\n");

  while (true) {
    const choice = Number(await ask("Problem number: "));
    if (choice === 0) break;
    try {
      await runProblem(choice);
    } catch (error) {
      console.log(error instanceof Error ? error.message : "Invalid input.");
    }
    console.log("");
  }

  rl.close();
}

main();
