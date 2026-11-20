# dsh-exv-theme-visual
<img width="2560" height="1399" alt="image" src="https://github.com/user-attachments/assets/e800d73c-05d9-41d8-beaf-ffdc3608654b" />

1.0.0 起不再限制体积与性能——这个包就是给「显卡有富余」的机器准备的。

## 现在有什么
- **实时渲染开场动画（2K / 4K 可选）**：即时演算，2K/4K，按 16:9 缩放铺进窗口。
<img width="1113" height="618" alt="image" src="https://github.com/user-attachments/assets/11b492b9-78a8-4462-8807-73b1cf30ec38" />
- **无极调色**：色相 / 饱和度 / 明度三根滑条算出主色写回 `theme.accent`，接管基座那 6 张色卡；和基座一样，重启 DSH 后生效。
- **全局后效**：色差 / 溢光 / 颗粒 / CRT / 光晕 / 暗角，作用范围是整个窗口（含文字）。
<img width="762" height="459" alt="image" src="https://github.com/user-attachments/assets/9bcf4bed-f8bf-45ed-a35b-5e45954f8a48" />
- **超高清背景卡**：目前有六张 Battlefield 3 超高清原画渲染官方CG，按文件夹归类。
- **出厂预设**：带自定义调色的增强包预设。
- **安全回退**：整页后效有黑屏风险，所以下次启动若发现上次没画出来，自动熄灭全部效果灯并给一行提示。

## 版本要求
**本增强包需要本体 `dsh-exv-theme` 2.7.0 及以上。** 更早的本体没有后效灯所需的设置行类型，「后效」页只会显示强度与提示、看不到六盏灯。
本体安装 / 升级：`dsh plugin --profile desktop add dsh-exv-theme`。

## 安装
- 客户端「插件 → 添加插件」填 `dsh-exv-theme-visual`，或命令行 `dsh plugin --profile desktop add dsh-exv-theme-visual`；
- 也可以装本体 Release 里的单文件安装器（Setup.exe），勾上「视觉增强包」。

## 素材与许可
遵循MIT协议。Battlefield 3 的背景10K超高清原图版权归 EA / DICE 所有，**不在 MIT 范围内**，也不进这个仓库——仓库里只有打包产物里内嵌的 4K 压缩版（3840 宽）。细节见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 构建
`client.js` 由本机脚本 `_work/_visual-client.cjs` 生成：它从基座 `cyan-theme/client.js` 里抽出开场动画的同一份代码与数据，再叠加后效层、调色、背景与预设注册。**不要手改这个 10MB 的产物**，改生成器再重跑。

## 联系
- GitHub：VMWHW
- QQ：2205206455
- QQ 频道：extervention — https://pd.qq.com/s/1mqvuu5pl
- B 站：https://space.bilibili.com/1993141778
