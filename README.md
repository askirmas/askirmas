# node v12.16.1

> js-performance@1.0.0 start /home/andrii/code/private/js-performance
> find . -type f -iname bench.ts | xargs ts-node --transpile-only

## array-map/bench.ts
### 10, idfn
forOf x 2,021,144 ops/sec ±2.88% (94 runs sampled)

forI0 x 3,417,282 ops/sec ±2.54% (89 runs sampled)

forIR x 3,662,710 ops/sec ±0.70% (94 runs sampled)

arMap x 2,455,752 ops/sec ±0.43% (95 runs sampled)

arForEach x 3,396,994 ops/sec ±0.50% (93 runs sampled)

#### Fastest: forIR
### 1000, idfn
forOf x 57,158 ops/sec ±0.64% (92 runs sampled)

forI0 x 543,042 ops/sec ±0.61% (96 runs sampled)

forIR x 533,678 ops/sec ±0.66% (97 runs sampled)

arMap x 85,551 ops/sec ±0.31% (98 runs sampled)

arForEach x 302,194 ops/sec ±3.27% (91 runs sampled)

#### Fastest: forI0
### 100000, idfn
forOf x 431 ops/sec ±3.90% (80 runs sampled)

forI0 x 2,112 ops/sec ±1.72% (91 runs sampled)

forIR x 2,093 ops/sec ±2.04% (91 runs sampled)

arMap x 730 ops/sec ±1.04% (86 runs sampled)

arForEach x 801 ops/sec ±8.21% (87 runs sampled)

#### Fastest: forI0,forIR
### 10000000, idfn
forOf x 4.66 ops/sec ±5.31% (17 runs sampled)

forI0 x 21.17 ops/sec ±4.05% (39 runs sampled)

forIR x 20.56 ops/sec ±3.90% (39 runs sampled)

arMap x 6.44 ops/sec ±3.64% (21 runs sampled)

arForEach x 16.18 ops/sec ±6.20% (44 runs sampled)

#### Fastest: forI0
