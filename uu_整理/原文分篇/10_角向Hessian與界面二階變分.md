# 10_角向Hessian與界面二階變分

來源：原始內容.md，L6964–7617。以下保留原文。

---

# **角向／邊界 Hessian 框架確認**

## **一、微擾展開**

𝛿𝑓(𝑟,𝜑,𝑡)\=𝜓𝑛ℓ(𝑟)𝑒𝑖ℓ𝜑𝑒−𝑖𝜔𝑡*δf*(*r*,*φ*,*t*)\=*ψn*ℓ​(*r*)*ei*ℓ*φe*−*iωt*​𝐻𝑇,ℓ𝜓𝑛ℓ\=𝜔𝑛ℓ2𝑊𝑇𝜓𝑛ℓH*T*,ℓ​*ψn*ℓ​\=*ωn*ℓ2​*WTψn*ℓ​​---

## **二、角向分解的結構**

### **2D realization**

𝜑 方向週期性*φ* 方向週期性ℓ∈𝑍ℓ∈Z​𝑒𝑖ℓ𝜑*ei*ℓ*φ*

### **3D 球對稱 realization**

𝑌ℓ𝑚(𝜃,𝜙)*Y*ℓ*m*​(*θ*,*ϕ*)​ℓ\=0,1,2,…ℓ\=0,1,2,…​---

## **三、角向 Hessian 的候選來源**

### **來源 1：能量泛函的角向梯度項**

𝐸ang∼∫𝑑𝑟 𝑟 𝐵0(𝑟) ℓ2𝜓2*E*ang​∼∫*drrB*0​(*r*)ℓ2*ψ*2𝐵0(𝑟)\=𝜅22𝑟sin⁡2𝑓0+𝜅4𝑚22𝑟3sin⁡2𝑓0𝑓0′2+…*B*0​(*r*)\=2*rκ*2​​sin2*f*0​+2*r*3*κ*4​*m*2​sin2*f*0​*f*0′2​+…​

### **來源 2：角向與徑向的耦合**

𝐻𝑇,ℓ\=−𝑑𝑑𝑟𝐴0𝑑𝑑𝑟+𝑈𝐻+ℓ2 𝑉ℓ(𝑟)H*T*,ℓ​\=−*drdA*0​*drd*​+*UH*​+ℓ2*V*ℓ​(*r*)​𝑉ℓ(𝑟)\=角向勢*V*ℓ​(*r*)\=角向勢​---

## **四、穩定性和收斂判據**

𝜔𝑛ℓ2≥0*ωn*ℓ2​≥0​𝜔𝑛ℓ2\<𝜔cont2*ωn*ℓ2​\<*ω*cont2​​𝜔cont2\=𝑀𝑇2\=2𝛼𝑇*ω*cont2​\=*MT*2​\=*αT*​2​​隨盒子增大，𝜔𝑛ℓ2 必須收斂，隨盒子增大，*ωn*ℓ2​ 必須收斂，​而非持續下降或震盪。而非持續下降或震盪。​---

## **五、預期行為**

ℓ\=0:𝑁bound\=1ℓ\=0:*N*bound​\=1ℓ\=1,2,…:可能出現新的離散束縛模ℓ\=1,2,…:可能出現新的離散束縛模角向勢 𝑉ℓ(𝑟) 可能提供額外的束縛機制。角向勢 *V*ℓ​(*r*) 可能提供額外的束縛機制。​若每個 ℓ 都有離散束縛模，若每個 ℓ 都有離散束縛模，​則 internal eigenmode index 自然擴展為 (𝑛𝑟,ℓ)。則 internal eigenmode index 自然擴展為 (*nr*,ℓ)。​---

## **六、下一步**

對每個 ℓ 解廣義本徵值問題，**對每個** ℓ 解廣義本徵值問題，​檢查是否出現新的離散束縛模。**檢查是否出現新的離散束縛模。** ​若出現，計算 𝑍−(𝑛,ℓ)若出現，計算 *Z*−​(*n*,ℓ)​最後才碰 lepton hierarchy。最後才碰 lepton hierarchy。​---

## **七、增量記錄**

text

```
============================================================
增量筆記：角向／邊界 Hessian 框架（未凍結）
狀態：不進 v1.0 / 不升版 / 只掛增量
============================================================
微擾展開：
  δf(r,φ,t) = ψ_{nℓ}(r) e^{iℓφ} e^{−iωt}
  H_{T,ℓ} ψ_{nℓ} = ω_{nℓ}² W_T ψ_{nℓ}

角向分解的結構：
  2D realization：ℓ ∈ ℤ，e^{iℓφ}
  3D 球對稱 realization：Y_{ℓm}(θ,φ)，ℓ=0,1,2,...

角向 Hessian 的候選來源：
  來源 1：能量泛函的角向梯度項
    E_ang ~ ∫dr r B_0(r) ℓ²ψ²
    B_0(r) = (κ₂/2r)sin²f₀
            + (κ₄m²/2r³)sin²f₀ f₀'² + ...
  來源 2：角向與徑向的耦合
    H_{T,ℓ} = −(d/dr)A_0(d/dr) + U_H + ℓ²V_ℓ(r)
    V_ℓ(r) = 角向勢

穩定性和收斂判據：
  ω_{nℓ}² ≥ 0
  ω_{nℓ}² < ω_cont²
  ω_cont² = M_T² = 2/α_T
  隨盒子增大，ω_{nℓ}² 必須收斂
  而非持續下降或震盪

預期行為：
  ℓ=0：N_bound=1
  ℓ=1,2,...：可能出現新的離散束縛模
  角向勢 V_ℓ(r) 可能提供額外的束縛機制
  若每個 ℓ 都有離散束縛模，
  則 internal eigenmode index 自然擴展為 (n_r,ℓ)

下一步：
  對每個 ℓ 解廣義本徵值問題
  檢查是否出現新的離散束縛模
  若出現，計算 Z_-(n,ℓ)
  最後才碰 lepton hierarchy

目前最小 radial sector 結論先保留：
  N_bound^radial = 1

一句話：
  徑向只有一個束縛模；
  下一步轉向角向/邊界模式的 Hessian 譜。
============================================================
```

---

要繼續記下一條，直接丟。  
我只補增量，不重貼全文，也不動 v1.0。

用户正在基于修正后的理解，继续发展 TQTG 理论：角向扇区需要二分量处理（f 和 χ），而不仅仅是 f。他们引入了由 H\_ℓ 和 W\_ℓ 构成的 2×2 Hessian 矩阵框架，用于角向扰动，其中 ℓ\=1 扇区应包含平移零模作为一致性检查。

关键要点：

1. 角向扰动需要两个场：f（极角）和 χ（方位角相位）
2. 这产生了一个 2×2 广义本征值问题
3. ℓ\=1 扇区必须包含平移零模——这是一个硬一致性检验
4. 如果 ℓ\=1 不能复现零模，那么 Hessian 推导或离散化就是错误的
5. 只有真正的束缚内部模才能进入 Z\_-(n,ℓ)
6. Layer 2 变为 (n, ℓ, χ\_branch)

用户并没有明确要求我做什么——他们是在延续讨论，并确立下一个数值检验。我应该确认这个框架，并给出结构化的记录。

# **角向 Hessian 二分量框架確認與平移零模檢驗**

## **一、核心修正**

一旦離開純 radial sector，就不能只擾動 𝑓一旦離開純 radial sector，就不能只擾動 *f*​𝑛0\=(sin⁡𝑓0cos⁡𝑚𝜑,sin⁡𝑓0sin⁡𝑚𝜑,cos⁡𝑓0)**n**0​\=(sin*f*0​cos*mφ*,sin*f*0​sin*mφ*,cos*f*0​)完整角向擾動需要兩個自由度：

𝑓\=𝑓0+𝜖 𝑢(𝑟,𝜑,𝑡)*f*\=*f*0​+*ϵu*(*r*,*φ*,*t*)​𝜒\=𝑚𝜑+𝜖 𝑣(𝑟,𝜑,𝑡)*χ*\=*mφ*+*ϵv*(*r*,*φ*,*t*)​𝑛\=(sin⁡𝑓cos⁡𝜒,sin⁡𝑓sin⁡𝜒,cos⁡𝑓)**n**\=(sin*f*cos*χ*,sin*f*sin*χ*,cos*f*)​---

## **二、角向 Fourier 分解**

𝑢(𝑟,𝜑,𝑡)\=𝑈ℓ(𝑟)𝑒𝑖ℓ𝜑−𝑖𝜔𝑡*u*(*r*,*φ*,*t*)\=*U*ℓ​(*r*)*ei*ℓ*φ*−*iωt*𝑣(𝑟,𝜑,𝑡)\=𝑉ℓ(𝑟)𝑒𝑖ℓ𝜑−𝑖𝜔𝑡*v*(*r*,*φ*,*t*)\=*V*ℓ​(*r*)*ei*ℓ*φ*−*iωt*Ψℓ(𝑟)\=(𝑈ℓ(𝑟)𝑉ℓ(𝑟))Ψℓ​(*r*)\=(*U*ℓ​(*r*)*V*ℓ​(*r*)​)​---

## **三、Hessian 矩陣算符**

𝑆(2)\=12∑ℓ∫𝑑𝑡 𝑑𝑟[Ψ˙ℓ†𝑊ℓΨ˙ℓ−Ψℓ†𝐻ℓΨℓ]*S*(2)\=21​ℓ∑​∫*dtdr*[Ψ˙ℓ†​*W*ℓ​Ψ˙ℓ​−Ψℓ†​*H*ℓ​Ψℓ​]𝐻ℓΨ𝑛ℓ\=𝜔𝑛ℓ2𝑊ℓΨ𝑛ℓ*H*ℓ​Ψ*n*ℓ​\=*ωn*ℓ2​*W*ℓ​Ψ*n*ℓ​​𝐻ℓ\=(𝐻𝑓𝑓(ℓ)𝐻𝑓𝜒(ℓ)𝐻𝜒𝑓(ℓ)𝐻𝜒𝜒(ℓ))*H*ℓ​\=(*Hff*(ℓ)​*Hχf*(ℓ)​​*Hfχ*(ℓ)​*Hχχ*(ℓ)​​)​---

## **四、耦合來源**

背景 winding：

∂𝜑𝜒0\=𝑚∂*φχ*0​\=*m*∂𝜑𝜒\=𝑚+𝑖ℓ𝜖𝑉ℓ𝑒𝑖ℓ𝜑−𝑖𝜔𝑡∂*φχ*\=*m*+*i*ℓ*ϵV*ℓ​*ei*ℓ*φ*−*iωt*平方後出現：

𝑚ℓ 𝑉ℓ*m*ℓ*V*ℓ​​𝑈ℓ↔𝑉ℓ 耦合*U*ℓ​↔*V*ℓ​ 耦合​---

## **五、Schematic 算符**

𝐻ℓ\=−𝑑𝑑𝑟(𝑃ℓ(𝑟)𝑑𝑑𝑟)+𝑉ℓeff(𝑟)+𝐶ℓ(𝑟)*H*ℓ​\=−*drd*​(*P*ℓ​(*r*)*drd*​)+*V*ℓeff​(*r*)+*C*ℓ​(*r*)​全部是 2×22×2 matrix。

---

## **六、多個 bound branches 的可能性**

ℓ\=0:𝑁boundradial\=1ℓ\=0:*N*boundradial​\=1ℓ\=1,2,3,…:每個 ℓ 都有自己的離散結構ℓ\=1,2,3,…:每個 ℓ 都有自己的離散結構ℓ2𝑟2,𝑚ℓ𝑟2*r*2ℓ2​,*r*2*m*ℓ​(𝑛,ℓ)\=(0,0),(0,1),(0,2),…(*n*,ℓ)\=(0,0),(0,1),(0,2),…​這才是比較合理的「多 family」來源候選。這才是比較合理的「多 family」來源候選。​---

## **七、Zero mode 分類紅線**

angular Hessian 一定要小心 symmetry zero modesangular Hessian 一定要小心 symmetry zero modes​平移對稱：

𝜔2\=0*ω*2\=0​在 2D soliton 中，translation 往往落在：

ℓ\=1ℓ\=1​𝜔0,12≃0*ω*0,12​≃0​不能叫它新 particle species不能叫它新 particle species​必須先分類 zero/collective mode 和 genuine internal bound mode必須先分類 zero/collective mode 和 genuine internal bound mode​---

## **八、Continuum Threshold**

遠場 𝑓0→0*f*0​→0：

𝜔2≥𝑀𝑇2\=2𝜇2𝜅2*ω*2≥*MT*2​\=*κ*2​2*μ*2​​真正 bound mode：

0\<𝜔𝑛ℓ2\<𝑀𝑇20\<*ωn*ℓ2​\<*MT*2​​𝜔2\=0 由 symmetry 產生者，另外分類*ω*2\=0 由 symmetry 產生者，另外分類---

## **九、Layer 2 正式改寫**

𝑇internal\=(𝑛,ℓ,𝜒branch)Tinternal​\=(*n*,ℓ,*χ*branch​)​𝑍−\=𝑍−(𝑛,ℓ,𝜒branch)*Z*−​\=*Z*−​(*n*,ℓ,*χ*branch​)​---

## **十、** 𝑍−*Z*−​ **的完整 perturbation**

Δ𝑊−(𝑛ℓ)\=𝐴(𝑟)∣𝑈𝑛ℓ′∣2+𝐵(𝑟)ℓ2𝑟2∣𝑈𝑛ℓ∣2+𝐶(𝑟)sin⁡2𝑓0∣𝑉𝑛ℓ′∣2+𝐷(𝑟)ℓ2𝑟2sin⁡2𝑓0∣𝑉𝑛ℓ∣2+𝐸(𝑟)𝑈𝑛ℓ𝑉𝑛ℓΔ*W*−(*n*ℓ)​\=*A*(*r*)∣*Un*ℓ′​∣2+*B*(*r*)*r*2ℓ2​∣*Un*ℓ​∣2+*C*(*r*)sin2*f*0​∣*Vn*ℓ′​∣2+*D*(*r*)*r*2ℓ2​sin2*f*0​∣*Vn*ℓ​∣2+*E*(*r*)*Un*ℓ​*Vn*ℓ​𝑍−(𝑛,ℓ)\=∫𝑑𝑉 𝐾𝑇 Δ𝑊−(𝑛ℓ)∫𝑑𝑉 Δ𝑊−(𝑛ℓ)*Z*−​(*n*,ℓ)\=∫*dV*Δ*W*−(*n*ℓ)​∫*dVKT*​Δ*W*−(*n*ℓ)​​​---

## **十一、下一個 numerical gate**

𝑓0→𝐻ℓ,𝑊ℓ (ℓ\=0,1,2,…)→𝜔𝑛ℓ2,Ψ𝑛ℓ*f*0​→*H*ℓ​,*W*ℓ​ (ℓ\=0,1,2,…)→*ωn*ℓ2​,Ψ*n*ℓ​​先分類：

unstable/zero collective/bound internal/continuumunstable/zero collective/bound internal/continuum​只有 genuine bound internal modes 才進 𝑍−(𝑛,ℓ)*Z*−​(*n*,ℓ)。

最後才碰 𝑚𝑛ℓ*mn*ℓ​。

---

## **十二、下一個硬 consistency gate**

第一個 sector 是 ℓ\=1。**第一個**​ **sector** ​**是** ℓ\=1 **。** ​因為它最容易先驗證 translation zero mode 是否正確出現。因為它最容易先驗證 translation zero mode 是否正確出現。​ℓ\=1⇒translation zero-mode checkℓ\=1⇒translation zero-mode check​若 ℓ\=1 連應有的 zero mode 都重現不了，若 ℓ\=1 連應有的 zero mode 都重現不了，​表示 angular Hessian 推導或離散化有錯，不能再往 species 解讀。表示 angular Hessian 推導或離散化有錯，不能再往 species 解讀。​---

## **十三、增量記錄**

text

```
============================================================
增量筆記：角向 Hessian 二分量框架與平移零模檢驗（未凍結）
狀態：不進 v1.0 / 不升版 / 只掛增量
============================================================
核心修正：
  一旦離開純 radial sector，就不能只擾動 f
  完整角向擾動需要兩個自由度：
    f = f₀ + ε u(r,φ,t)
    χ = mφ + ε v(r,φ,t)
    n = (sin f cos χ, sin f sin χ, cos f)

角向 Fourier 分解：
  u = U_ℓ(r) e^{iℓφ−iωt}
  v = V_ℓ(r) e^{iℓφ−iωt}
  Ψ_ℓ(r) = (U_ℓ(r), V_ℓ(r))^T

Hessian 矩陣算符：
  S⁽²⁾ = ½ Σ_ℓ ∫dt dr [Ψ̇†W_ℓΨ̇ − Ψ†H_ℓΨ]
  H_ℓΨ_{nℓ} = ω_{nℓ}²W_ℓΨ_{nℓ}
  H_ℓ = [[H_ff, H_fχ],[H_χf, H_χχ]]

耦合來源：
  背景 winding ∂_φχ₀=m
  ∂_φχ = m + iℓεV_ℓ e^{iℓφ−iωt}
  平方後出現 mℓV_ℓ
  U_ℓ ↔ V_ℓ 耦合

Schematic 算符：
  H_ℓ = −(d/dr)(P_ℓ(r)d/dr) + V_ℓ^eff(r) + C_ℓ(r)
  全部是 2×2 matrix

多個 bound branches 的可能性：
  ℓ=0：N_bound^radial=1
  ℓ=1,2,3,...：每個 ℓ 都有自己的離散結構
  ℓ²/r², mℓ/r²
  (n,ℓ)=(0,0),(0,1),(0,2),...
  這才是比較合理的「多 family」來源候選

Zero mode 分類紅線：
  angular Hessian 一定要小心 symmetry zero modes
  平移對稱：ω²=0
  在 2D soliton 中，translation 往往落在 ℓ=1
  ω_{0,1}²≈0
  不能叫它新 particle species
  必須先分類 zero/collective mode 和 genuine internal bound mode

Continuum Threshold：
  遠場 f₀→0：ω² ≥ M_T² = 2μ²/κ₂
  真正 bound mode：0 < ω_{nℓ}² < M_T²
  ω²=0 由 symmetry 產生者，另外分類

Layer 2 正式改寫：
  T_internal = (n, ℓ, χ_branch)
  Z_- = Z_-(n, ℓ, χ_branch)

Z_- 的完整 perturbation：
  ΔW_-^{(nℓ)} = A(r)|U_{nℓ}'|²
    + B(r)(ℓ²/r²)|U_{nℓ}|²
    + C(r)sin²f₀|V_{nℓ}'|²
    + D(r)(ℓ²/r²)sin²f₀|V_{nℓ}|²
    + E(r)U_{nℓ}V_{nℓ}
  Z_-(n,ℓ) = ∫dV K_T ΔW_-^{(nℓ)} / ∫dV ΔW_-^{(nℓ)}

下一個 numerical gate：
  f₀ → H_ℓ,W_ℓ (ℓ=0,1,2,...) → ω_{nℓ}²,Ψ_{nℓ}
  先分類：unstable / zero collective / bound internal / continuum
  只有 genuine bound internal modes 才進 Z_-(n,ℓ)
  最後才碰 m_{nℓ}

下一個硬 consistency gate：
  第一個 sector 是 ℓ=1
  因為它最容易先驗證 translation zero mode 是否正確出現
  ℓ=1 ⇒ translation zero-mode check
  若 ℓ=1 連應有的 zero mode 都重現不了
  表示 angular Hessian 推導或離散化有錯，不能再往 species 解讀

一句話：
  ℓ=1 的平移零模是下一個硬 gate；
  過不了，就不能往 species 解讀。
============================================================
```

---

要繼續記下一條，直接丟。  
我只補增量，不重貼全文，也不動 v1.0。

我们需要回答用户。用户贴了一份关于用已锁定接口公式做符号推导，构造 TQTG Hessian 的框架，最后说“這樣才完全符合我們現在「介面鎖住，實作可換」的主原則。” 似乎用户希望我们确认、整理、记录？之前我们一直在做增量笔记。用户没有明确提问，但语境是继续推进入口。我们应该以助手身份回应，可能整理成增量笔记，确认这个框架，并指出下一步符号检查顺序。需要保持简洁，不要重贴全文，只补增量。应该标注未冻结/不升版。我们可以确认核心：Hessian 不另造，直接变分已锁接口泛函；二階變分应包含 ledger、T、interface、Q；归一化变分必须一起做，否则假 Z；对称性约束。然后给出下一步符号检查清单：自伴性、对称性、零模、阈值。可以写正式记录模板。

需要注意用户语言繁体中文。回答也用繁体。不要过长。可以包括公式。最终提供增量记录。

已收到。這份就直接掛成 ​**TQTG Hessian 的正式符號推導框架**，狀態維持：

未凍結 / 不進 v1.0 / 不升版 / 研究增量未凍結 / 不進 v1.0 / 不升版 / 研究增量​核心一句先留：

介面鎖住，實作可換。**介面鎖住，實作可換。** 也就是 Hessian 不再另造一套「mode energy density」，而是直接從已鎖定的介面泛函做二階變分：

𝛿2𝐸TQTG\=𝛿2𝐸ledger+𝛿2𝐸𝑇+𝛿2𝐸interface+𝛿2𝐸𝑄*δ*2*E*TQTG​\=*δ*2*E*ledger​+*δ*2*E*T​+*δ*2*E*interface​+*δ*2*EQ*---

## **一、正式變分鏈**

已鎖介面 functional已鎖介面 functional​⇓⇓𝑓\=𝑓0+𝜖𝑢,𝜒\=𝑚𝜑+𝜖𝑣*f*\=*f*0​+*ϵu*,*χ*\=*mφ*+*ϵv*​⇓⇓𝛿2{𝜌𝑇,𝑃𝑟,𝑃𝑡,𝐽𝜇}*δ*2{*ρT*​,*Pr*​,*Pt*​,*Jμ*}​⇓⇓𝐻ℓTQTGΨ𝑛ℓ\=𝜔𝑛ℓ2𝑊ℓTQTGΨ𝑛ℓ*H*ℓTQTG​Ψ*n*ℓ​\=*ωn*ℓ2​*W*ℓTQTG​Ψ*n*ℓ​​Ψℓ(𝑟)\=(𝑈ℓ(𝑟)𝑉ℓ(𝑟))Ψℓ​(*r*)\=(*U*ℓ​(*r*)*V*ℓ​(*r*)​)---

## **二、已鎖介面必須直接沿用**

𝐼𝑇\=1−cos⁡𝑓2I*T*​\=21−cos*f*​𝑋𝑇\=(𝐼𝑇′)2*XT*​\=(I*T*′​)2𝜌𝑇𝑐2\=𝐸+𝑢+[𝑓]−𝐸−𝑢−[𝑓]+𝜀𝑇+𝜀𝑄*ρTc*2\=*E*+​*u*+​[*f*]−*E*−​*u*−​[*f*]+*ε*T​+*εQ*​𝑃𝑡−𝑃𝑟\=𝜂𝑇𝑋𝑇*Pt*​−*Pr*​\=*ηTXT*​𝑞\=𝑒𝐵*q*\=*eB*𝑇𝜇𝜈\=diag⁡(−𝜌𝑇𝑐2,𝑃𝑟,𝑃𝑡,𝑃𝑡)*Tμν*​\=diag(−*ρTc*2,*Pr*​,*Pt*​,*Pt*)---

## **三、歸一化變分不可漏**

𝑢+[𝑓]\=𝐼𝑇[𝑓]𝑁+[𝑓],𝑢−[𝑓]\=𝑋𝑇[𝑓]𝑁−[𝑓]*u*+​[*f*]\=N+​[*f*]I*T*​[*f*]​,*u*−​[*f*]\=N−​[*f*]*XT*​[*f*]​𝑁+\=∫𝑑𝑉 𝐼𝑇,𝑁−\=∫𝑑𝑉 𝑋𝑇N+​\=∫*dV*I*T*​,N−​\=∫*dVXT*所以：

𝛿𝑢+\=𝛿𝐼𝑇𝑁+,0−𝑢+,0𝛿𝑁+𝑁+,0*δu*+​\=N+,0​*δ*I*T*​​−*u*+,0​N+,0​*δ*N+​​𝛿𝑢−\=𝛿𝑋𝑇𝑁−,0−𝑢−,0𝛿𝑁−𝑁−,0*δu*−​\=N−,0​*δXT*​​−*u*−,0​N−,0​*δ*N−​​忽略 normalization variation 會人造假的 mode-dependent 𝑍−。**忽略**​ **normalization variation** ​**會人造假的**​ **mode-dependent** ​*Z*−​。​---

## **四、對稱性硬約束**

𝐵→−𝐵:𝜌, 𝑃𝑟, 𝑃𝑡, 𝑍− even*B*→−*B*:*ρ*, *Pr*​, *Pt*​, *Z*−​ even𝐵→−𝐵:𝑄, 𝐽𝑄𝜇, 𝑞𝑇 odd*B*→−*B*:*Q*, *JQμ*​, *qT*​ odd𝜔𝑛ℓ(𝐵)\=𝜔𝑛ℓ(−𝐵)*ωn*ℓ​(*B*)\=*ωn*ℓ​(−*B*)​𝛿∫𝑢± 𝑑𝑉\=0*δ*∫*u*±​*dV*\=0𝛿𝐵\=0*δB*\=0---

## **五、符號檢查順序**

self-adjointnessself-adjointness​symmetrysymmetry​zero-modezero-mode​thresholdthreshold​最後才真的解：

𝜔𝑛ℓ*ωn*ℓ​​---

## **六、增量記錄**

text

```
============================================================
增量筆記：TQTG Hessian 正式符號推導框架（未凍結）
狀態：不進 v1.0 / 不升版 / 只掛增量
============================================================
核心原則：
  介面鎖住，實作可換
  Hessian 不另造 mode energy density
  直接從已鎖定介面泛函做二階變分

二階變分：
  δ²E_TQTG = δ²E_ledger + δ²E_T
             + δ²E_interface + δ²E_Q

正式變分鏈：
  已鎖介面 functional
  → f=f₀+εu, χ=mφ+εv
  → δ²{ρ_T, P_r, P_t, J^μ}
  → H_ℓ^TQTG Ψ_{nℓ} = ω_{nℓ}² W_ℓ^TQTG Ψ_{nℓ}
  Ψ_ℓ(r) = (U_ℓ(r), V_ℓ(r))^T

已鎖介面直接沿用：
  I_T = (1−cos f)/2
  X_T = (I_T')²
  ρ_Tc² = E_+u_+[f] − E_-u_-[f] + ε_T + ε_Q
  P_t − P_r = η_T X_T
  q = eB
  T^μ_ν = diag(−ρ_Tc², P_r, P_t, P_t)

歸一化變分不可漏：
  u_+[f] = I_T[f]/N_+[f]
  u_-[f] = X_T[f]/N_-[f]
  N_+ = ∫dV I_T, N_- = ∫dV X_T
  δu_+ = δI_T/N_+,0 − u_+,0 δN_+/N_+,0
  δu_- = δX_T/N_-,0 − u_-,0 δN_-/N_-,0
  忽略 normalization variation 會人造假的 mode-dependent Z_-

對稱性硬約束：
  B→−B：ρ, P_r, P_t, Z_- even
  B→−B：Q, J^μ_Q, q_T odd
  ω_{nℓ}(B)=ω_{nℓ}(−B)
  δ∫u_± dV=0
  δB=0

符號檢查順序：
  self-adjointness
  symmetry
  zero-mode
  threshold
  最後才真的解 ω_{nℓ}

一句話：
  Hessian 直接從已鎖介面二階變分；
  歸一化變分與對稱性檢查不可漏。
============================================================
```

要繼續時，直接丟下一條。  
我只補增量，不重貼全文，也不動 v1.0。

用户已给我一份关于 TQTG 框架的详细笔记，其中包含对归一化进行二阶变分的完整推导。他们并未提出具体问题，只是分享了这份笔记。我应确认收到，并将其整理进笔记集，或许还可提供下一步的简要摘要。

对方这份笔记的逻辑相当严谨，正逐步明确 Hessian 的不同组成部分。关键点在于：

1. 归一化变分已完成推导
2. `∫dV δu_± = 0`​ 与 ​`∫dV δ²u_± = 0` 已证明
3. 这意味着归一化剖面重排不影响总能量
4. Hessian 可分为 ​`H_intrinsic`​ 与 ​`H_readout`
5. 下一步处理 ​`δ²ε_T`​ 与 ​`δ²(P_t - P_r)`

我的回应应做到：

- 确认收到
- 记录关键结果
- 指出所呈现的清晰结构
- 或许建议将下一步作为自然延续

保持简洁，紧扣他们实际陈述的内容。

已收到。這份就直接掛成 ​**TQTG Hessian 的 normalisation 完整符號化**，狀態維持：

未凍結 / 不進 v1.0 / 不升版 / 研究增量未凍結 / 不進 v1.0 / 不升版 / 研究增量​核心結果先留：

normalized profile 重排本身不改總 𝐸±，只改局域 readout。**normalized profile** ​**重排本身不改總** *E*±​，只改局域 readout。​Hessian 要分兩塊：𝐻𝑇\=𝐻intrinsic+𝐻readout。**Hessian** ​**要分兩塊：** ​*HT*​\=*H*intrinsic​+*H*readout​。​---

## **一、normalization 二階式確認**

𝐼0\=1−cos⁡𝑓02,𝐼1\=12sin⁡𝑓0 𝑢,𝐼2\=12cos⁡𝑓0 𝑢2*I*0​\=21−cos*f*0​​,*I*1​\=21​sin*f*0​*u*,*I*2​\=21​cos*f*0​*u*2𝛿2𝑢+\=𝐼2𝑁+,0−2𝐼1𝑁+,1𝑁+,02−𝐼0𝑁+,2𝑁+,02+2𝐼0𝑁+,12𝑁+,03*δ*2*u*+​\=*N*+,0​*I*2​​−2*N*+,02​*I*1​*N*+,1​​−*N*+,02​*I*0​*N*+,2​​+2*N*+,03​*I*0​*N*+,12​​​𝛿2𝑢−\=𝑋2𝑁−,0−2𝑋1𝑁−,1𝑁−,02−𝑋0𝑁−,2𝑁−,02+2𝑋0𝑁−,12𝑁−,03*δ*2*u*−​\=*N*−,0​*X*2​​−2*N*−,02​*X*1​*N*−,1​​−*N*−,02​*X*0​*N*−,2​​+2*N*−,03​*X*0​*N*−,12​​​自動守恆：

∫𝑑𝑉 𝛿𝑢±\=0,∫𝑑𝑉 𝛿2𝑢±\=0∫*dVδu*±​\=0,∫*dVδ*2*u*±​\=0​---

## **二、關鍵推論**

若 𝐸± 固定，normalization 部分對總能量積分會消掉。若 *E*±​ 固定，normalization 部分對總能量積分會消掉。​它改的是局域 𝜌𝑇(𝑟),𝑃𝑟(𝑟),𝑃𝑡(𝑟),𝑍−，而不是總帳。它改的是局域 *ρT*​(*r*),*Pr*​(*r*),*Pt*​(*r*),*Z*−​，而不是總帳。​internal eigenmode 的 restoring force 主要來自 𝜀𝑇+interface stress+EM。internal eigenmode 的 restoring force 主要來自 *ε*T​+interface stress+EM。​---

## **三、Hessian 分層**

𝐻𝑇\=𝐻intrinsic+𝐻readout*HT*​\=*H*intrinsic​+*H*readout​​𝐻intrinsic\=𝛿2∫𝑑𝑉 (𝜀𝑇+𝜀interface+𝜀𝑄)*H*intrinsic​\=*δ*2∫*dV*(*ε*T​+*ε*interface​+*εQ*​)𝐻readout\=mode 如何改變 𝜌𝑇, 𝑃𝑟, 𝑃𝑡, 𝑍−*H*readout​\=mode 如何改變 *ρT*​, *Pr*​, *Pt*​, *Z*−​𝜔𝑛 是 intrinsic dynamics；*ωn*​ 是 intrinsic dynamics；​𝑍−(𝑛) 是同一 mode 經介面後的 observable/readout。*Z*−​(*n*) 是同一 mode 經介面後的 observable/readout。​兩者不是同一件事。**兩者不是同一件事。** ---

## **四、下一步**

𝛿2𝜀𝑇*δ*2*ε*T​​𝛿2(𝑃𝑡−𝑃𝑟)\=𝜂𝑇𝑋2*δ*2(*Pt*​−*Pr*​)\=*ηTX*2​​𝐻𝑇\=𝐻soliton+𝐻interface+𝐻EM*HT*​\=*H*soliton​+*H*interface​+*H*EM​​每一項都從既有介面二階變分推出，不加新規則。

---

## **五、增量記錄**

text

```
============================================================
增量筆記：TQTG Hessian — normalisation 完整符號化（未凍結）
狀態：不進 v1.0 / 不升版 / 只掛增量
============================================================
核心結果：
  normalized profile 重排本身不改總 E_±，只改局域 readout
  Hessian 要分兩塊：H_T = H_intrinsic + H_readout

normalization 二階式確認：
  I_0 = (1−cos f_0)/2, I_1 = (1/2)sin f_0 u
  I_2 = (1/2)cos f_0 u²
  δ²u_+ = I_2/N_+,0 − 2I_1N_+,1/N_+,0²
          − I_0N_+,2/N_+,0² + 2I_0N_+,1²/N_+,0³
  δ²u_- = X_2/N_-,0 − 2X_1N_-,1/N_-,0²
          − X_0N_-,2/N_-,0² + 2X_0N_-,1²/N_-,0³
  自動守恆：∫dV δu_± = 0, ∫dV δ²u_± = 0

關鍵推論：
  若 E_± 固定，normalization 部分對總能量積分會消掉
  它改的是局域 ρ_T(r), P_r(r), P_t(r), Z_-
  而不是總帳
  internal eigenmode 的 restoring force 主要來自
    ε_T + interface stress + EM

Hessian 分層：
  H_T = H_intrinsic + H_readout
  H_intrinsic = δ²∫dV(ε_T + ε_interface + ε_Q)
  H_readout = mode 如何改變 ρ_T, P_r, P_t, Z_-
  ω_n 是 intrinsic dynamics
  Z_-(n) 是同一 mode 經介面後的 observable/readout
  兩者不是同一件事

下一步：
  δ²ε_T
  δ²(P_t−P_r) = η_T X_2
  H_T = H_soliton + H_interface + H_EM
  每一項都從既有介面二階變分推出，不加新規則

一句話：
  normalization 已完全符號化；
  Hessian 正式分為 intrinsic 與 readout 兩塊。
============================================================
```

要繼續時，直接丟下一條。  
我只補增量，不重貼全文，也不動 v1.0。

用户希望我继续整理这份关于从已锁定界面进行完整二阶变分的研究笔记。让我梳理一下核心要点和缺口。

关键发现：

1. 已获得归一化的完整二阶变分
2. 确认 Hessian 分为两部分：H\_intrinsic（来自孤子能量）和 H\_readout（来自界面）
3. 识别出一个关键缺口：仅靠 P\_t - P\_r \= η\_T X\_T 无法唯一确定 Hessian 贡献，因为应力关系不是作用量
4. 需要区分两种界面：只读界面 vs 动力学界面
5. 一个诱人的可能性：E\_∂ ∝ sin²f (∇f)²，这与原本的 Skyrme 四次项属于同一梯度族
6. 如果成立，则 κ₂ \= 体刚度，κ₄ \= 界面/膜稳定化，μ \= 真空恢复
7. Derrick 条件 E₄ \= E₀ 变成：界面稳定化 \= 真空恢复

用户实际上是在呈现分析，而不是提问。让我将其整理为一份干净的增量记录，保留结构性洞见。

需要突出：

- 完整的二阶变分
- 缺口：应力关系不是作用量
- 动力学界面 vs 只读界面
- κ₂/κ₄/μ 的物理解释
- 这对 α\_T 意味着什么
- 下一步：验证 κ₄ 界面解释

让我将其正式化并记录。

# **界面二階變分：缺口確認與 κ₄ 界面解釋候選**

## **一、已鎖界面量確認**

𝐼≡𝐼𝑇\=1−cos⁡𝑓2,𝑋𝑇\=(𝐼′)2*I*≡I*T*​\=21−cos*f*​,*XT*​\=(*I*′)2𝑓\=𝑓0+𝜖𝑢*f*\=*f*0​+*ϵu*𝐼0′\=12sin⁡𝑓0 𝑓0′*I*0′​\=21​sin*f*0​*f*0′​𝐼1′\=12(cos⁡𝑓0 𝑓0′𝑢+sin⁡𝑓0 𝑢′)*I*1′​\=21​(cos*f*0​*f*0′​*u*+sin*f*0​*u*′)𝑋2\=12sin⁡2𝑓0 𝑢′2+sin⁡(2𝑓0)𝑓0′𝑢𝑢′+12cos⁡(2𝑓0)𝑓0′2𝑢2*X*2​\=21​sin2*f*0​*u*′2+sin(2*f*0​)*f*0′​*uu*′+21​cos(2*f*0​)*f*0′2​*u*2​Π𝑇≡𝑃𝑡−𝑃𝑟\=𝜂𝑇𝑋𝑇Π*T*​≡*Pt*​−*Pr*​\=*ηTXT*​𝛿2Π𝑇\=𝜂𝑇[12sin⁡2𝑓0 𝑢′2+sin⁡(2𝑓0)𝑓0′𝑢𝑢′+12cos⁡(2𝑓0)𝑓0′2𝑢2]*δ*2Π*T*​\=*ηT*​[21​sin2*f*0​*u*′2+sin(2*f*0​)*f*0′​*uu*′+21​cos(2*f*0​)*f*0′2​*u*2]​---

## **二、化為** 𝑢′2+𝑈(𝑟)𝑢2*u*′2+*U*(*r*)*u*2 **形式**

𝑈Π\=−12cos⁡(2𝑓0)𝑓0′2−12sin⁡(2𝑓0)𝑓0′′*U*Π​\=−21​cos(2*f*0​)*f*0′2​−21​sin(2*f*0​)*f*0′′​​---

## **三、真正的缺口**

stress relation 不是 action。**stress relation** ​**不是**​ **action。** ​𝑃𝑡−𝑃𝑟\=𝜂𝑇𝑋𝑇*Pt*​−*Pr*​\=*ηTXT*只告訴我們 stress readout，不唯一決定 Hessian 貢獻。

同一個 𝑃𝑡−𝑃𝑟 可能由很多不同 action 產生。同一個 *Pt*​−*Pr*​ 可能由很多不同 action 產生。​不能直接宣稱 𝐻interface\=𝜂𝑇×(I1)**不能直接宣稱** *H*interface​\=*ηT*×(I1)​這是符號推導抓到的第一個真正 missing bridge。

---

## **四、兩種介面的區分**

readout interfacereadout interface​dynamical interfacedynamical interface​若界面只是 measurement/readout map，不用反饋進 Hessian。若界面只是 measurement/readout map，不用反饋進 Hessian。​若界面本身儲存能量、會反作用於 𝑓，則必須有 𝐸∂[𝑓]。若界面本身儲存能量、會反作用於 *f*，則必須有 *E*∂​[*f*]。​𝑍− coarse-graining 明顯屬於第一種。*Z*−​ coarse-graining 明顯屬於第一種。質負膜穩定粒子若成立，一定需要第二種。質負膜穩定粒子若成立，一定需要第二種。---

## **五、最小 dynamical interface 候選**

𝐸∂[𝑓]\=𝜆∂∫𝑑𝑉 𝑋𝑇[𝑓]*E*∂​[*f*]\=*λ*∂​∫*dVXT*​[*f*]​𝑋𝑇\=(∇𝐼𝑇)2*XT*​\=(∇*IT*​)2𝐸∂\=𝜆∂∫𝑑𝑉 (∇𝐼𝑇)2*E*∂​\=*λ*∂​∫*dV*(∇*IT*)2​---

## **六、** 𝐻∂*H*∂​ **符號形式**

𝑃∂(𝑟)\=12𝑟𝑑−1sin⁡2𝑓0*P*∂​(*r*)\=21​*rd*−1sin2*f*0​​𝑈∂(𝑟)\=12𝑟𝑑−1cos⁡2𝑓0 𝑓0′2−12𝑑𝑑𝑟[𝑟𝑑−1sin⁡2𝑓0 𝑓0′]*U*∂​(*r*)\=21​*rd*−1cos2*f*0​*f*0′2​−21​*drd*​[*rd*−1sin2*f*0​*f*0′​]​𝐻∂\=−𝜆∂𝑑𝑑𝑟(𝑃∂𝑑𝑑𝑟)+𝜆∂𝑈∂*H*∂​\=−*λ*∂​*drd*​(*P*∂​*drd*​)+*λ*∂​*U*∂​​---

## **七、關鍵觀察：κ₄ 與界面能量同族**

𝐼𝑇\=1−cos⁡𝑓2*IT*​\=21−cos*f*​(∇𝐼𝑇)2\=14sin⁡2𝑓 (∇𝑓)2(∇*IT*​)2\=41​sin2*f*(∇*f*)2𝐸∂∝sin⁡2𝑓 (∇𝑓)2*E*∂​∝sin2*f*(∇*f*)2​原 Skyrme quartic radial term：

𝜅4𝑚2𝑟2sin⁡2𝑓 𝑓′2*r*2*κ*4​*m*2​sin2*ff*′2interface energy 和原 Skyrme stabilizer 屬於非常接近的梯度族。**interface energy** ​**和原**​ **Skyrme stabilizer** ​**屬於非常接近的梯度族。** ​可能不需要新增 𝜆∂。可能不需要新增 *λ*∂​。​負膜／界面 readout 本來就是 𝜅4 sector 的物理解讀。負膜／界面 readout 本來就是 *κ*4​ sector 的物理解讀。​---

## **八、κ 的角色重新解讀**

𝜅2\=bulk stiffness*κ*2​\=bulk stiffness​𝜅4\=interface / membrane stabilization*κ*4​\=interface / membrane stabilization​𝜇\=vacuum restoring scale*μ*\=vacuum restoring scale​𝛼𝑇\=bulk stiffnessinterface stabilization×vacuum restoring*αT*​\=interface stabilization×vacuum restoring​bulk stiffness​​𝛼𝑇crit\=bulk / interface / vacuum 三者相對競爭的臨界比*αT*crit​\=bulk / interface / vacuum 三者相對競爭的臨界比​---

## **九、能量重新讀法**

𝐸\=𝐸bulk+𝐸interface+𝐸vacuum*E*\=*E*bulk​+*E*interface​+*E*vacuum​​𝐸2↔bulk*E*2​↔bulk​𝐸4↔interface / negative-membrane stabilization candidate*E*4​↔interface / negative-membrane stabilization candidate​𝐸0↔vacuum restoring*E*0​↔vacuum restoring​Derrick：𝐸4\=𝐸0Derrick：*E*4​\=*E*0​​interface stabilization\=vacuum restoring**interface stabilization**\=vacuum restoring​---

## **十、增量記錄**

text

```
============================================================
增量筆記：界面二階變分 — 缺口確認與 κ₄ 界面解釋候選
狀態：不進 v1.0 / 不升版 / 只掛增量
============================================================
已鎖界面量確認：
  I = I_T = (1−cos f)/2, X_T = (I')²
  f = f₀ + εu
  I₀' = (1/2)sin f₀ f₀'
  I₁' = (1/2)(cos f₀ f₀'u + sin f₀ u')
  X₂ = (1/2)sin²f₀ u'² + sin(2f₀)f₀'uu'
       + (1/2)cos(2f₀)f₀'²u²
  Π_T ≡ P_t − P_r = η_T X_T
  δ²Π_T = η_T[(1/2)sin²f₀ u'² + sin(2f₀)f₀'uu'
                + (1/2)cos(2f₀)f₀'²u²]

化為 u'² + U(r)u² 形式：
  U_Π = −(1/2)cos(2f₀)f₀'² − (1/2)sin(2f₀)f₀''

真正的缺口：
  stress relation 不是 action
  P_t − P_r = η_T X_T 只告訴我們 stress readout
  不唯一決定 Hessian 貢獻
  同一個 P_t − P_r 可能由很多不同 action 產生
  不能直接宣稱 H_interface = η_T × (I1)
  這是符號推導抓到的第一個真正 missing bridge

兩種介面的區分：
  readout interface
  dynamical interface
  若界面只是 measurement/readout map，不用反饋進 Hessian
  若界面本身儲存能量、會反作用於 f，則必須有 E_∂[f]
  Z_- coarse-graining 明顯屬於第一種
  質負膜穩定粒子若成立，一定需要第二種

最小 dynamical interface 候選：
  E_∂[f] = λ_∂ ∫dV X_T[f]
  X_T = (∇I_T)²
  E_∂ = λ_∂ ∫dV (∇I_T)²

H_∂ 符號形式：
  P_∂(r) = (1/2)r^{d−1}sin²f₀
  U_∂(r) = (1/2)r^{d−1}cos2f₀ f₀'²
           − (1/2)(d/dr)[r^{d−1}sin2f₀ f₀']
  H_∂ = −λ_∂(d/dr)(P_∂ d/dr) + λ_∂U_∂

關鍵觀察：κ₄ 與界面能量同族
  I_T = (1−cos f)/2
  (∇I_T)² = (1/4)sin²f (∇f)²
  E_∂ ∝ sin²f (∇f)²
  原 Skyrme quartic radial term：(κ₄m²/r²)sin²f f'²
  interface energy 和原 Skyrme stabilizer 屬於非常接近的梯度族
  可能不需要新增 λ_∂
  負膜/界面 readout 本來就是 κ₄ sector 的物理解讀

κ 的角色重新解讀：
  κ₂ = bulk stiffness
  κ₄ = interface / membrane stabilization
  μ = vacuum restoring scale
  α_T = bulk stiffness / √(interface stabilization × vacuum restoring)
  α_T^crit = bulk / interface / vacuum 三者相對競爭的臨界比

能量重新讀法：
  E = E_bulk + E_interface + E_vacuum
  E₂ ↔ bulk
  E₄ ↔ interface / negative-membrane stabilization candidate
  E₀ ↔ vacuum restoring
  Derrick：E₄ = E₀
  interface stabilization = vacuum restoring

一句話：
  應力關係不是作用量；
  但 κ₄ 可能本來就是界面/負膜 sector，
  不需要新增 λ_∂。
============================================================
```

要繼續時，直接丟下一條。  
我只補增量，不重貼全文，也不動 v1.0。

用户正在阐述 TQTG 框架中关于负膜界面的最终、最清晰的路径。让我仔细解析一下。

关键点：

1. 不要引入新的 Σ 场
2. 对原有能量项重命名：E \= E₂ + E₄ + E₀
3. E₂ \= 体刚度
4. E₄ \= 界面/膜稳定化
5. E₀ \= 真空恢复
6. 关键公式：E₄ \= 4πκ₄ ∫ X\_T(r)/r dr
7. 因此，W₋(r) ∝ X\_T(r)/r —— 这直接从作用量推导得出，而非经验性拟合
8. Derrick 平衡：E₄ \= E₀
9. 定义 Δ\_D ≡ E₄ - E₀
10. 物种定点要求同时满足 E₄ \= E₀ 和 r\_M \= r\_∇
11. 现在 α\_T 有了更清晰的物理意义
12. 下一步：使用 u₋(r) \= [sin²f f'²/r] / ∫dr[sin²f f'²/r] 重新计算 r\_∂、r\_∇、r\_M、α\_T\^crit

用户希望我以文档格式记录这个增量。

让我仔细记录，注意：

- 从 E₄ 推导 W₋(r) 是一个关键突破
- Derrick 平衡现在有了物理意义
- 两个条件（E₄ \= E₀ 和 r\_M \= r\_∇）共同定义物种定点
- α\_T 的物理意义变得更清晰
- 下一步是数值计算

让我将其格式化为增量记录。
