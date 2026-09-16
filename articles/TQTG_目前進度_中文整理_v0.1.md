# TQTG 目前進度整理 v0.1

> 中文為主、給自己看的 working notes。  
> 不是正式論文，也不是「已證實新物理」的宣告。  
> 目標：把目前還活著的主線、已經過關的結果、還沒過關的地方整理成一份容易回頭看的版本。

---

## 0. 先用一句話講現在的 TQTG

TQTG（Taiji Quantum Topological Geometry）目前最核心的想法是：

**底層只保留四樣東西：正能、負能、電荷、量子太極結構。**

也就是：

\[
\boxed{E_+,\;E_-,\;Q,\;\mathcal T}
\]

其他我們平常看到的東西——質量、粒子、場、時空、重力、散射、真空、甚至巨觀結構——都當成這四者在不同尺度下的有效表現。

目前不是要重算所有物理，而是：

\[
\boxed{\text{誰算得準就直接用；TQTG 解釋它背後是什麼。}}
\]

所以外部仍然用 QM / QED / QFT / GR / Statistical Mechanics 等成熟理論當 calculator；TQTG 主要負責內部 ontology、microstructure 與 matching。

---

# 1. 四元素閉合（Four-Element Closure）

目前最重要的架構：

1. **Positive Energy**：\(E_+\)
2. **Negative Energy**：\(E_-\)
3. **Charge**：\(Q\)
4. **Quantum-Taiji Structure**：\(\mathcal T\)

理論的硬目標是：

\[
\boxed{\text{全部解釋只准用 }E_+,E_-,Q,\mathcal T}
\]

如果最後被迫再引入第五個 fundamental variable，這個 closure 就失敗。

---

# 2. 太極內部 vs 外部世界：一定要封裝

這是目前很重要的新原則。

## 2.1 太極內部（private implementation）

太極內部，我們可以用自己的語言：

- Positive-energy collapsed core
- Negative-energy membrane
- Taiji internal phase / topology
- Quantum-Taiji configuration
- Vacuum internal structure
- Internal attraction–repulsion gradient

也就是：

\[
\boxed{E_+,E_-,Q,\mathcal T}
\]

這些是 TQTG 自己的 microscopic implementation。

## 2.2 一旦出去外面，就守外面的規則

跨出 Taiji interface 後，不直接把「負能膜」「正能核心」拿給外面的 QED/GR 用。

外面只看標準 observable：

\[
\boxed{m,q,s,\Gamma,\tau,\mu,F(q^2),\sigma(E),T_{\mu\nu},\ldots}
\]

例如：

| 外部看到的量 | TQTG 內部解讀 |
|---|---|
| Rest mass \(m\) | Positive-energy collapse 被 negative-energy membrane 穩定後的 eigenstate energy |
| Charge \(q\) | \(Q\)-sector eigenvalue |
| Spin \(s\) | 內部 Taiji structure 對 rotation / Lorentz representation 的量子數 |
| Width \(\Gamma\)、lifetime \(\tau\) | 穩定界面 / membrane 的破裂或 tunneling rate |
| Form factor | core + membrane 空間結構的外部投影 |
| Cross section \(\sigma\) | 封裝後交給 QFT/QED 算 |
| \(T_{\mu\nu}\) | 對外的 energy-momentum response，交給 GR |

一句話：

\[
\boxed{\textbf{內部說「它是什麼」；外部只看「它量到什麼」。}}
\]

這條目前可叫：

**TQTG-124 — Full Observable Encapsulation Principle**

核心：

\[
\boxed{\textbf{內部本體自主，外部接口服從已驗證物理。}}
\]

---

# 3. 粒子的目前圖像

目前 TQTG 對 massive particle 的最簡圖像：

\[
\boxed{\text{Positive-energy collapse core} + \text{Negative-energy stabilizing membrane}}
\]

## 3.1 質量不是最底層天生參數

外面的物理直接使用 rest mass \(m\)。

TQTG 內部則把它解讀成穩定態能量：

\[
\boxed{mc^2 = E_{\rm stable}-E_{\rm vac}}
\]

也可以概念性拆成：

\[
mc^2 = E_+ + E_- + E_{\rm int}
\]

其中 \(E_-<0\) 時要注意 sign convention。

## 3.2 負能膜不是「創造質量」

比較準的說法：

\[
\boxed{\text{負能膜讓正能局部化態能穩定存在，不容易重新散開 / 解離 / 衰變。}}
\]

所以：

\[
\boxed{m \leftrightarrow \text{stable energy level}}
\]

\[
\boxed{\Gamma,\tau \leftrightarrow \text{interface / membrane stability}}
\]

## 3.3 「視界能」先不要等同 rest mass

如果要描述打開封閉結構需要的 barrier，現在比較適合另外記：

\[
E_H \quad \text{or} \quad \Delta_{\rm break}
\]

代表 interface stability scale / breaking barrier。

目前先保留：

\[
\boxed{mc^2 \neq E_H \;\text{（一般不應直接畫等號）}}
\]

---

# 4. 聚斥梯度與合理界面

目前這條可以保留成：

**TQTG-123 — Reasonable Interface Closure for Attraction–Repulsion Gradients**

核心不是「定了梯度就成立」，而是：

\[
\boxed{\text{Gradient} + \text{Interface Conditions} = \text{Closable Structure}}
\]

有效力可以寫成：

\[
F_{\rm eff}(r)
= -\frac{d}{dr}
\left[E_+(r)+E_-(r)+E_{\rm int}(r)\right]
\]

穩定界面 \(r_*\)：

\[
F_{\rm eff}(r_*)=0
\]

以及：

\[
\left.\frac{dF_{\rm eff}}{dr}\right|_{r_*}<0
\]

等價於有效能量局部極小：

\[
\left.\frac{d^2E_{\rm eff}}{dr^2}\right|_{r_*}>0
\]

重要修正：

**Negative energy 不等於自動 repulsion。**

真正的作用方向由 gradient 決定：

\[
F_-=-\nabla E_-
\]

所以「負能可以造成外斥」要由 profile / coupling 導出，不能只靠名稱。

界面至少要守：

- Energy conservation
- Charge conservation
- No-signalling
- Unitarity / boundedness
- QED / GR low-energy compatibility

如果只能事後調參把界面補起來，視為 road failure，不拿來修補 mountain。

---

# 5. 真空（Vacuum）

目前真空的定義不是「什麼都沒有」。

\[
\boxed{\text{Vacuum = 正負能 + 電荷 + Quantum-Taiji structure 的最低穩定量子配置}}
\]

概念上可以有：

\[
\rho_+^{\rm vac}(x),\quad
\rho_-^{\rm vac}(x),\quad
\rho_Q^{\rm vac}(x),\quad
\mathcal T(x)
\]

平衡真空可能是內部正負量都不小，但 net response 很小：

\[
\rho_+^{\rm vac}-|\rho_-^{\rm vac}|+\rho_{\rm int}^{\rm vac}\approx \text{small}
\]

這目前仍是 TQTG internal picture，不等於已經解決 vacuum-energy / gravity 問題。

---

# 6. 場、QED、GR 怎麼接

我們現在不要重新發明成熟理論。

## Electromagnetism

內部：

\[
\{E_+,E_-,Q,\mathcal T\}
\]

經 matching / interface 後輸出：

\[
A_\mu,\quad F_{\mu\nu},\quad j^\mu
\]

然後外面照 QED 跑。

## Gravity

內部：

\[
\{E_+,E_-,Q,\mathcal T\}
\]

粗粒化後輸出：

\[
T_{\mu\nu}^{\rm eff},\quad g_{\mu\nu}^{\rm eff}
\]

然後外面照 GR 跑。

一句話：

\[
\boxed{\text{TQTG = engine, standard theories = calculators, matching layer = adapter}}
\]

---

# 7. Photon 數值主線：TQTG-121

目前最硬的數值主線仍然是 photon spectral audit。

規則已鎖：

\[
\boxed{\text{先 morphology，再 branch identity，再 dispersion/gaplessness，再 photon emergence}}
\]

流程：

\[
\lambda=3\rightarrow\lambda=4\rightarrow\lambda=5\rightarrow\lambda=7
\rightarrow \text{branch audit}
\rightarrow \text{dispersion/gaplessness}
\rightarrow \text{photon emergence}
\rightarrow \text{QED matching}
\]

目前 QED matching 暫停，不能先偷跑。

---

# 8. 已完成的 numerical results

Production geometry：

- OpenBox(3,2,2)
- Emax = 1
- Hilbert-space size \(N=637,404,612\)

Production ground state：

\[
E_0=-8.472597311765885
\]

目前 transverse geometry eigenvalues：

\[
\lambda=3\;(\text{mult}=2),\quad
4\;(1),\quad
5\;(4),\quad
7\;(2)
\]

這裡的：

\[
k_{\rm spec}=\sqrt{\lambda}
\]

目前只是一個 geometry-only spectral coordinate，**還不是 physical momentum**。

---

# 9. \(\lambda=3\) 結果

\(\lambda=3\) multiplicity = 2。

兩個 basis directions 都各自得到 original-\(H\) certification，並且最後做了 basis-invariant doublet closure。

主要 pole：

\[
\omega\approx1.608849214626
\]

每個 probe 約 90.8% weight 落在 dominant pole。

兩個 state 的 energy split 約：

\[
1.4\times10^{-12}
\]

所以目前可講：

\[
\boxed{\lambda=3\text{ 有一個非常乾淨的 dominant low-energy cluster / doublet closure}}
\]

但：

**PHOTON_EMERGENCE = NOT_TESTED**

---

# 10. \(\lambda=4\) 結果

\(\lambda=4\) multiplicity = 1。

60→80 step spectral measure 顯示兩個主要低能 pole：

\[
\omega_1\approx1.577725814823
\]

\[
\omega_2\approx1.701940447024
\]

weight fractions 約：

- 68.69%
- 24.17%

合計：

\[
\approx92.86\%
\]

兩個 Ritz state 都做過 independent original-\(H\) residual certification，確認不是 Lanczos artifact。

目前只允許說：

\[
\boxed{\lambda=4\text{ connected transverse-electric response contains two independent certified low-energy poles}}
\]

還不能說哪一根是 photon branch。

---

# 11. \(\lambda=5\) 60-step 結果（目前最新完成 milestone）

這是目前最重要的新結果。

\(\lambda=5\) multiplicity = 4，所以不能把任一個 arbitrary basis mode 當 physical branch。

因此這次做的是 **basis-invariant summed trace spectral measure**。

四個 mode 都完成 60 steps；connected Gram、weight sum、summed trace closure 都 PASS。

60-step summed trace：

\[
\operatorname{tr}C=0.9520357300056755
\]

\[
W_{\rm summed}=0.9520357300056665
\]

closure error：

\[
\approx 8.99\times10^{-15}
\]

目前低能區反覆出現三個共同 cluster：

\[
\boxed{\omega_A\approx1.6228477233}
\]

\[
\boxed{\omega_B\approx1.66798100}
\]

\[
\boxed{\omega_C\approx1.68004608}
\]

而且它們不是某一個 basis mode 才有，而是不同 basis probes 都投影到同樣幾個 energy positions。

目前 morphology 判斷：

\[
\boxed{\lambda=5 = \text{three-cluster / multi-pole morphology}}
\]

這比 \(\lambda=4\) 的 two-pole 結構更進一步，表示低能 spectral structure 很可能不是單純偶發 splitting。

但是現在還不能叫它：

- three physical branches
- photon branches
- dispersion branches

因為 branch identity 還沒做。

---

# 12. \(\lambda=5\) 80-step continuation：現在正在跑

目前已經確認：

- 使用同一支 M0B7D-r1 script
- script SHA256 一致
- 四個 mode 的 60-step checkpoint 都存在
- 80-step continuation 已啟動
- 沒有改 \(H\)
- 沒有改 \(\psi_0\)
- 沒有改 probe definition

目前 80-step run 的目標只有三件事：

1. 看 \(\omega_A,\omega_B,\omega_C\) 是否繼續 freeze
2. 看 summed weights 是否穩定
3. 看 Lanczos residual 是否繼續下降

80-step 完成前不做新結論。

---

# 13. 目前還不能說什麼

這些全部還沒有過：

\[
\boxed{\text{BRANCH\_IDENTITY = UNRESOLVED}}
\]

\[
\boxed{\text{LINEAR\_DISPERSION = NOT\_ESTABLISHED}}
\]

\[
\boxed{\text{GAPLESSNESS = NOT\_TESTED}}
\]

\[
\boxed{\text{PHOTON\_EMERGENCE = NOT\_TESTED}}
\]

所以現在不能說：

- 已找到 photon
- 已證明 photon emergence
- 已得到 physical momentum relation
- 已證明 linear dispersion
- 已得到 \(c\)
- 已進入 QED matching

這些要等後面的 gate。

---

# 14. 下一步最佳路

目前 numerical mainline：

1. 完成 \(\lambda=5\) 80-step continuation
2. 如果 three-cluster energies / weights freeze，而且 residual 夠低：做 independent original-\(H\) Ritz certification
3. 然後才進 \(\lambda=7\) multiplicity-2 basis-invariant audit
4. 收集 \(\lambda=3,4,5,7\) spectral morphology
5. 再做 branch identity audit
6. branch identity 建立後才談 dispersion
7. dispersion / gaplessness 過關後才談 photon emergence
8. photon emergence 過關後才重新開 QED matching

紅線：

\[
\boxed{\text{不為了漂亮 dispersion 而挑 branch}}
\]

\[
\boxed{\text{不改 H、不改 ground state、不用 QED 倒灌修數值}}
\]

---

# 15. 「山與路」方法

目前整個 TQTG 最重要的方法論仍然是：

- Mountain = 核心 ontology / target idea
- Road = 數學推導、numerical implementation、matching mechanism

如果一條 road 失敗，先換路。

只有當：

- 多條獨立 road 都失敗
- 或直接撞上 established math / experiment

才考慮移動 mountain。

所以：

\[
\boxed{\text{road failure 不等於 ontology failure}}
\]

但也不能無限補洞。

---

# 16. 目前最適合的對外說法

如果放到 Zenodo / GitHub，現在最適合叫：

**TQTG Research Progress Archive v0.1**

或：

**TQTG Working Notes — Photon Spectral Audit**

不要叫：

- complete theory
- theory of everything proven
- photon discovered

比較適合的簡短描述：

> 這是一份 TQTG 的 ongoing independent theoretical / numerical research archive。內容記錄目前的 ontology、matching strategy、numerical spectral audits、PASS / UNRESOLVED 狀態與可重現計算。現階段不宣稱 TQTG 已獲實驗證實，也不宣稱 photon emergence 已建立。

---

# 17. 建議 Keywords（English）

- Taiji Quantum Topological Geometry
- TQTG
- Quantum Geometry
- Emergent Spacetime
- Quantum Vacuum
- Positive Energy
- Negative Energy
- Energy Collapse
- Stabilizing Membrane
- Spectral Morphology
- Lanczos Method
- Ritz Certification
- Basis-Invariant Spectral Measure
- Photon Emergence
- Effective Field Theory
- QED Matching
- General Relativity Matching
- Quantum Topology
- Research Notes
- Independent Research
- Reproducible Computation

---

# 18. 自己回頭看時，先記住這 8 句

1. **底層只留 \(E_+,E_-,Q,\mathcal T\)。**
2. **Massive particle = positive-energy collapse + negative-energy stabilization。**
3. **Negative energy 不是自動 repulsion，真正方向由 gradient 決定。**
4. **太極內部我們定義 ontology；出去外面就遵守 standard physics。**
5. **所有內部結構都要 encapsulate 成標準 observable。**
6. **Numerical mainline 先 morphology，再 branch identity，再 dispersion，再 photon。**
7. **目前 \(\lambda=5\) 已看到穩定 three-cluster / multi-pole morphology，但不是 physical three branches。**
8. **現在正在做 \(\lambda=5\) 60→80 continuation。**

---

# 19. 目前狀態總表

| 項目 | 狀態 |
|---|---|
| Four-element closure | 🟢 Core architecture |
| Particle = collapse core + stabilizing membrane | 🟡 Working microscopic picture |
| TQTG-123 Interface Closure | 🟡 Structural principle |
| TQTG-124 Observable Encapsulation | 🟢 Architecture principle |
| \(\lambda=3\) spectral audit | ✅ PASS |
| \(\lambda=4\) two-pole + certification | ✅ PASS |
| \(\lambda=5\) 60-step basis-invariant summed trace | ✅ PASS |
| \(\lambda=5\) morphology | ✅ three-cluster / multi-pole |
| \(\lambda=5\) 80-step continuation | ⏳ Running |
| \(\lambda=5\) independent Ritz certification | ⏸ Waiting |
| \(\lambda=7\) | ⏸ Not started |
| Branch identity | ❓ UNRESOLVED |
| Linear dispersion | ❌ NOT ESTABLISHED |
| Gaplessness | ❌ NOT TESTED |
| Photon emergence | ❌ NOT TESTED |
| QED matching restart | ⏸ Blocked until photon gates pass |

---

# 20. 最後一句

現在 TQTG 最重要的不是把故事講大，而是把每一個 interface 與 numerical gate 做硬。

\[
\boxed{\textbf{內部敢想，外部守規則；每一關用數字說話。}}
\]

