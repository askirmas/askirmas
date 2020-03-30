# node v12.16.1

> js-performance@1.0.0 start /home/andrii/code/private/js-performance
> find . -type f -iname bench.ts -exec ts-node --transpile-only {} \;

## array-map/bench.ts
### 10, idfn
forOf x 2,190,432 ops/sec ±0.26% (96 runs sampled)

forI0 x 3,669,486 ops/sec ±1.18% (94 runs sampled)

forIR x 3,796,497 ops/sec ±0.21% (92 runs sampled)

arMap x 2,565,904 ops/sec ±0.28% (94 runs sampled)

arForEach x 3,615,035 ops/sec ±0.19% (93 runs sampled)

#### Fastest: forIR
### 1000, idfn
forOf x 59,847 ops/sec ±0.24% (97 runs sampled)

forI0 x 554,400 ops/sec ±0.27% (98 runs sampled)

forIR x 556,765 ops/sec ±0.29% (96 runs sampled)

arMap x 89,860 ops/sec ±0.23% (97 runs sampled)

arForEach x 334,076 ops/sec ±0.37% (96 runs sampled)

#### Fastest: forIR
### 100000, idfn
forOf x 511 ops/sec ±1.13% (92 runs sampled)

forI0 x 2,167 ops/sec ±0.33% (96 runs sampled)

forIR x 2,165 ops/sec ±0.31% (94 runs sampled)

arMap x 761 ops/sec ±0.22% (94 runs sampled)

arForEach x 977 ops/sec ±10.02% (90 runs sampled)

#### Fastest: forI0,forIR
### 10000000, idfn
forOf x 5.16 ops/sec ±0.41% (17 runs sampled)

forI0 x 22.70 ops/sec ±0.35% (42 runs sampled)

forIR x 22.48 ops/sec ±0.39% (41 runs sampled)

arMap x 7.79 ops/sec ±0.30% (24 runs sampled)

arForEach x 19.37 ops/sec ±0.30% (52 runs sampled)

#### Fastest: forI0
## functions-chain/bench.ts
### 0
idfn^1 v1 x 756,844 ops/sec ±0.24% (92 runs sampled)

idfn^1 v2 x 761,714 ops/sec ±0.27% (97 runs sampled)

idfn^10 v1 x 101,981 ops/sec ±0.48% (95 runs sampled)

idfn^10 v2 x 102,499 ops/sec ±0.24% (95 runs sampled)

idfn^100 v1 x 106,402 ops/sec ±0.29% (99 runs sampled)

idfn^100 v2 x 107,422 ops/sec ±0.33% (94 runs sampled)

idfn^1000 v1 x 84,794 ops/sec ±0.37% (93 runs sampled)

idfn^1000 v2 x 84,805 ops/sec ±0.66% (97 runs sampled)

#### Fastest: idfn^1 v2
## assoc-foreach_1/bench.ts
### 0
forInEntry x 4,077,311 ops/sec ±0.40% (92 runs sampled)

keysForEachEntry x 3,889,468 ops/sec ±0.28% (93 runs sampled)

keysForI0Entry x 3,962,198 ops/sec ±0.28% (96 runs sampled)

keysValuesForI0Entry x 3,793,628 ops/sec ±0.18% (97 runs sampled)

entriesForEachEntry x 3,882,524 ops/sec ±0.55% (94 runs sampled)

entriesForIREntry x 3,908,031 ops/sec ±0.41% (92 runs sampled)

mapEntriesEntries x 3,766,696 ops/sec ±0.31% (95 runs sampled)

#### Fastest: forInEntry
### 1
forInEntry x 1,816,508 ops/sec ±0.30% (93 runs sampled)

keysForEachEntry x 1,851,415 ops/sec ±0.53% (94 runs sampled)

keysForI0Entry x 1,927,932 ops/sec ±0.37% (97 runs sampled)

keysValuesForI0Entry x 1,575,853 ops/sec ±0.41% (93 runs sampled)

entriesForEachEntry x 1,747,646 ops/sec ±0.66% (95 runs sampled)

entriesForIREntry x 1,784,845 ops/sec ±0.30% (92 runs sampled)

mapEntriesEntries x 2,739,993 ops/sec ±0.49% (96 runs sampled)

#### Fastest: mapEntriesEntries
### 10
forInEntry x 1,805,866 ops/sec ±0.29% (95 runs sampled)

keysForEachEntry x 1,878,954 ops/sec ±0.32% (94 runs sampled)

keysForI0Entry x 1,961,688 ops/sec ±0.42% (95 runs sampled)

keysValuesForI0Entry x 1,635,184 ops/sec ±0.28% (91 runs sampled)

entriesForEachEntry x 1,714,929 ops/sec ±0.45% (96 runs sampled)

entriesForIREntry x 1,784,567 ops/sec ±0.25% (94 runs sampled)

mapEntriesEntries x 2,706,987 ops/sec ±0.49% (94 runs sampled)

#### Fastest: mapEntriesEntries
### 100
forInEntry x 81,273 ops/sec ±0.45% (96 runs sampled)

keysForEachEntry x 84,733 ops/sec ±0.33% (91 runs sampled)

keysForI0Entry x 88,650 ops/sec ±0.77% (95 runs sampled)

keysValuesForI0Entry x 100,141 ops/sec ±0.32% (96 runs sampled)

entriesForEachEntry x 64,262 ops/sec ±0.31% (92 runs sampled)

entriesForIREntry x 65,159 ops/sec ±0.64% (95 runs sampled)

mapEntriesEntries x 118,499 ops/sec ±0.64% (90 runs sampled)

#### Fastest: mapEntriesEntries
### 1000
forInEntry x 8,478 ops/sec ±0.55% (97 runs sampled)

keysForEachEntry x 9,033 ops/sec ±0.76% (95 runs sampled)

keysForI0Entry x 8,826 ops/sec ±1.75% (92 runs sampled)

keysValuesForI0Entry x 10,733 ops/sec ±0.50% (98 runs sampled)

entriesForEachEntry x 6,305 ops/sec ±0.60% (96 runs sampled)

entriesForIREntry x 6,433 ops/sec ±0.54% (90 runs sampled)

mapEntriesEntries x 12,836 ops/sec ±0.39% (97 runs sampled)

#### Fastest: mapEntriesEntries
### 100000
forInEntry x 49.66 ops/sec ±1.42% (65 runs sampled)

keysForEachEntry x 49.16 ops/sec ±1.10% (64 runs sampled)

keysForI0Entry x 50.77 ops/sec ±1.08% (66 runs sampled)

keysValuesForI0Entry x 54.95 ops/sec ±1.64% (71 runs sampled)

entriesForEachEntry x 28.83 ops/sec ±2.81% (52 runs sampled)

entriesForIREntry x 29.82 ops/sec ±2.70% (53 runs sampled)

mapEntriesEntries x 124 ops/sec ±0.27% (79 runs sampled)

#### Fastest: mapEntriesEntries
## assoc-foreach_2/bench.ts
### 0
forInKV x 3,881,594 ops/sec ±0.62% (91 runs sampled)

keysForEachKV x 3,729,016 ops/sec ±0.20% (94 runs sampled)

keysForI0KV x 3,780,796 ops/sec ±0.61% (90 runs sampled)

keysValuesForI0KV x 3,522,723 ops/sec ±0.29% (97 runs sampled)

entriesForEachKV x 3,580,583 ops/sec ±0.58% (92 runs sampled)

entriesForIREntry x 3,631,203 ops/sec ±0.53% (93 runs sampled)

mapEntriesKV x 3,440,696 ops/sec ±0.56% (95 runs sampled)

#### Fastest: forInKV
### 1
forInKV x 2,007,832 ops/sec ±0.56% (94 runs sampled)

keysForEachKV x 2,071,869 ops/sec ±0.33% (95 runs sampled)

keysForI0KV x 2,179,792 ops/sec ±0.71% (91 runs sampled)

keysValuesForI0KV x 1,757,329 ops/sec ±0.59% (93 runs sampled)

entriesForEachKV x 1,723,038 ops/sec ±0.81% (87 runs sampled)

entriesForIREntry x 2,036,379 ops/sec ±0.23% (97 runs sampled)

mapEntriesKV x 2,593,683 ops/sec ±0.44% (94 runs sampled)

#### Fastest: mapEntriesKV
### 10
forInKV x 2,013,194 ops/sec ±0.21% (97 runs sampled)

keysForEachKV x 2,099,168 ops/sec ±0.27% (99 runs sampled)

keysForI0KV x 2,171,265 ops/sec ±0.33% (90 runs sampled)

keysValuesForI0KV x 1,786,506 ops/sec ±0.51% (92 runs sampled)

entriesForEachKV x 1,718,956 ops/sec ±0.60% (89 runs sampled)

entriesForIREntry x 2,043,066 ops/sec ±0.29% (91 runs sampled)

mapEntriesKV x 2,593,066 ops/sec ±0.52% (88 runs sampled)

#### Fastest: mapEntriesKV
### 100
forInKV x 171,772 ops/sec ±0.15% (95 runs sampled)

keysForEachKV x 190,231 ops/sec ±0.41% (97 runs sampled)

keysForI0KV x 204,719 ops/sec ±0.16% (98 runs sampled)

keysValuesForI0KV x 306,034 ops/sec ±0.18% (95 runs sampled)

entriesForEachKV x 68,638 ops/sec ±0.83% (97 runs sampled)

entriesForIREntry x 121,675 ops/sec ±0.22% (93 runs sampled)

mapEntriesKV x 119,794 ops/sec ±0.32% (93 runs sampled)

#### Fastest: keysValuesForI0KV
### 1000
forInKV x 17,976 ops/sec ±0.58% (90 runs sampled)

keysForEachKV x 20,918 ops/sec ±0.29% (97 runs sampled)

keysForI0KV x 21,944 ops/sec ±0.34% (95 runs sampled)

keysValuesForI0KV x 36,078 ops/sec ±0.34% (92 runs sampled)

entriesForEachKV x 6,693 ops/sec ±0.36% (94 runs sampled)

entriesForIREntry x 12,564 ops/sec ±0.49% (93 runs sampled)

mapEntriesKV x 12,506 ops/sec ±0.51% (95 runs sampled)

#### Fastest: keysValuesForI0KV
### 100000
forInKV x 88.98 ops/sec ±1.37% (74 runs sampled)

keysForEachKV x 96.79 ops/sec ±1.21% (71 runs sampled)

keysForI0KV x 101 ops/sec ±1.84% (74 runs sampled)

keysValuesForI0KV x 131 ops/sec ±1.89% (75 runs sampled)

entriesForEachKV x 30.21 ops/sec ±3.00% (54 runs sampled)

entriesForIREntry x 44.40 ops/sec ±4.33% (47 runs sampled)

mapEntriesKV x 121 ops/sec ±0.35% (78 runs sampled)

#### Fastest: keysValuesForI0KV
## assoc_number-push/bench.ts
### 10
objectAssign x 1,728,236 ops/sec ±0.49% (89 runs sampled)

arrayAssign x 3,473,042 ops/sec ±0.33% (93 runs sampled)

arrayPush x 3,625,746 ops/sec ±0.58% (86 runs sampled)

mapSet x 1,353,306 ops/sec ±0.28% (93 runs sampled)

#### Fastest: arrayPush
### 10^3
objectAssign x 61,684 ops/sec ±0.21% (94 runs sampled)

arrayAssign x 205,287 ops/sec ±0.27% (97 runs sampled)

arrayPush x 197,267 ops/sec ±0.31% (98 runs sampled)

mapSet x 28,125 ops/sec ±0.45% (95 runs sampled)

#### Fastest: arrayAssign
### 10^5
objectAssign x 447 ops/sec ±0.33% (90 runs sampled)

arrayAssign x 829 ops/sec ±0.30% (88 runs sampled)

arrayPush x 810 ops/sec ±0.40% (86 runs sampled)

mapSet x 122 ops/sec ±1.22% (78 runs sampled)

#### Fastest: arrayAssign
### 10^7
objectAssign x 3.13 ops/sec ±6.96% (12 runs sampled)

arrayAssign x 4.70 ops/sec ±9.44% (17 runs sampled)

arrayPush x 4.74 ops/sec ±9.43% (17 runs sampled)

mapSet x 0.29 ops/sec ±3.34% (5 runs sampled)

#### Fastest: arrayPush,arrayAssign
