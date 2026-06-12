# YAPILACAKLAR HARİTASI — v5 (KADEMELİ)
### tek şerit · kapılı kademeler · "TAM bitmeden sonrakine geçilmez"
*kaynak: vizyon v4 (Ege'nin tüm sözleri) + plan v4 + 9-11 Haziran keşif/çözüm kanıtları + Ege'nin 11 Haz gecesi düzeltmeleri.*
*işaretler: **‹E›** = Ege'nin sözü (tarihli) · **◆F** = Fable bulgusu/önerisi · ✓ = kanıtla bitti · ◐ = kısmen · ○ = yok.*
***v4'ten tek madde silinmedi** — her v4 maddesi bir kademeye yerleşti (en altta eşleme).*

---

## İŞLEYİŞ YASALARI ‹E 11 Haz›
1. **TEK ŞERİT:** işler paralel yürümez. Bir kademe TAM bitmeden sonraki kademeden görev açılmaz. *(istisna: SÜREKLİ KATMAN — o görev değil, nöbet.)*
2. **KAPI = BİTTİ TANIMI:** her kademenin sonunda yazılı kanıt listesi. Hepsi sağlanmadan kapı kapalı.
3. **1 SONRA 2:** önce hakimiyet (dosya/harita/ölçüm), sonra hamle. Her büyük iş önce anatomisini çıkarır.
4. **HIZ DOĞRULUĞU FEDA EDEMEZ:** altın set (20 sabit hipotez, diff=0) her motor/mantık değişikliğinin bekçisi.
5. **YARIM İŞ YASAK — yapıyla:** ajanın sözüne değil zembereğe güvenilir (Kademe 0/Z maddesi). Her görev dosyasında "KALDIĞIM YER", bitince "TAMAM".
6. **ANLAYIŞ MİRASI:** Ege'nin ham sözü → Fable damıtır → sade kaynaklı belge → her seviye LLM okur. Her görev "ÖNCE OKU" ile başlar.
7. Plan pusula, kelepçe değil ‹E 10 Haz› — ama sapma da kayda geçer.

---

## DURUM MÜHRÜ — 11 Haziran gecesi (kanıtlı)
**Bu hafta kapananlar:** köprünün 6 duvarı (model/bütçe×2/turns/timeout×2) · DeepSeek göçü ($0.59/gün, %92 cache) · keşif: dosya haritası + 2.100 satır sorun envanteri + TUR C felsefe-kod farkı · büyük süpürme (17.4MB, geri-alınabilir) · ÇÖZÜM 1 thread/SEGV + pre_screen 115s→16.8s · ÇÖZÜM 2 havuz dirilişi (no_model 2.953→0, kota 30×) · 2b free_only kilidi + Gemini native · ÇÖZÜM 3 karne canlı · ÇÖZÜM 4 kokpit 5 gösterge · teknik repertuvar (20 konsept) + ilk Ege hipotezi kayıtlı · M1 koşuyor (altın set baseline).
**Jarvis:** 10 Haz 23:17'den beri restart'sız; STILLBORN=0, ERROR=0; ilk gerçek FAIL'ler (59) düştü.
**Açık ipuçları:** timeout %42 (motor) · cerberus cron var ama 3 gündür sessiz (sessizce ölüyor) · k1'de gpt-oss/gemini-flash %0 (format şüphesi) · İSTEKLER "DB bağlantısı" iddiaları doğrulanmadı · free roam ölü kod · 6/7 refleks yok · giriş/çıkış monolitik · candle modülü SAHTE.

---

# KADEME 0 — ZEMİN MÜHRÜ *(içindeyiz)*
**amaç:** fabrika hızlı, dürüst ve insansız-yarım-kalmaz olsun. Bunsuz her sonraki kademenin ölçümü çürük.

- **Z1. Motor M1** ◐ *(koşuyor)* — prepare param-bağımsız/bağımlı ayrımı + sembol önbelleği + DH O(n²) vektörize + ATR ön-hesap. Kanıt: altın set diff=0, bench önce/sonra, timeout oranı düşüşü.
- **Z2. Motor M2 — bar loop dönüşümü** ○ — sinyal-güdümlü hibrit: vektörize tarama + yalnız pozisyon-açık pencerede bar-bar simülasyon (382s→hedef <60s). **Tasarım Fable'da** (girdi: motor_dosyasi.md içeriği Ege'den Fable'a — bekleyen el işi). Uygulama flash, altın set bekçi.
- **Z3. Motor M3 — rekalibrasyon** ○ — timeout katmanları (60/90/150/180/300/600) yeni hızlara göre; küçültülen keşif derinliği (10×120) geri genişletilir.
- **Z4. Kanonik tek giriş** ◐ — `run_canonical_backtest(config, universe, window, seed)`; tüm yollar (test/golden/jarvis-K2/scriptler) SADECE bunu çağırır; config_hash+seed kayıtlı. Altın set bunun ilk tuğlası — tam hali burada biter. 8 Haz "üç çelişkili sonuç" vakası geriye dönük açıklanır.
- **Z5. ZEMBEREK (gerçek dürtücü)** ○ — kanıt (11 Haz 22:55, crontab): ajanın "10 dk'da cron'la bakarım" sözü HAYALDİ — kayıt yok. Yapı: systemd timer, 10 dk'da bir: aktif görev dosyasının sonunda "TAMAM" yok VE köprü >N dk sessiz → Telegram API ile "devam" (günlük üst sınır, kaçak döngü kilidi). Kanıt: bilerek yarım bırakılan test görevi insan eli değmeden tamamlanır.
- **Z6. Hijyen paketi (tek oturum)** ○ — a) candle-SAHTE: toggle KAPAT (ya da gerçekle — karar: kapat, gerçeklemesi Kademe 1'e) b) cerberus cron otopsisi: 0 16 * * 1-5 kaydı var, 3 gündür iz yok — log + exit code c) İSTEKLER "DB bağlantısı" iddialarının gerçeklik testi (ayna 3d'nin ilk adımı) d) gen_%06d format taşması e) log rotation (jarvis_service.log 35MB+) f) docker multi-stage (disk).
- **Z7. İki görünmez mayın — SORU görevi** ○ ◆F — a) BIST tavan/taban limitleri SimulatedBroker'da modelleniyor mu (tavan kilidinde "alamazsın")? b) bedelli/bedelsiz/temettü düzeltmesi veri kaynağında var mı? İkisi de patlama avcısının gerçekliği için ön şart; cevap "yok" ise iş Kademe 1 öncesine açılır.

**BİTTİ TANIMI (kapı):** medium 50×400 < 60s ✚ altın set diff=0 ✚ kanonik giriş tek kapı ✚ zemberek kanıtlı (insansız tamamlanan test görevi) ✚ hijyen 6 kalemi kapalı ✚ mayın soruları cevaplı ✚ kokpit yalansız ✚ 48 saat restart'sız temiz koşu.

---

# KADEME 1 — GÖZ: piyasayı görme ‹E 11 Haz: "TradingView'dan görür gibi"›
**amaç:** sistem hisseye insan gibi baksın. İnsan gözü modeli ◆F: **çevresel görüş** (hep açık, ucuz, herkese) + **fovea** (sinyal/karar anında keskin odak). Sinyal bekleyen göz patlamayı kaçırır — tarayan göz önce görür.

- **G1. Çevresel görüş önbelleği** ○ — her sembol için sürekli güncel "görüş dosyası" (vektörel, LLM'siz): yıllık hikâye ölçümleri (zirve-dip konumu, patlama sayısı/deseni), aylık yapı (BoS/ChoCh durumu, S/R bölgeleri, FVG envanteri), hacim karakteri, oynaklık profili, rejim, patlama-sınıfı ex-ante özellikleri (Hurst dahil). Motor önbelleğiyle (Z1) aynı altyapıyı paylaşır.
- **G2. Piyasa yapısı modülleri** ○ — BoS/ChoCh dedektörü (TUR C: "en çok kaçırılan") + FVG modülü ("en ucuz kazanım") — kopya değil BIST uyarlaması ‹E›; class kapısından ölçülerek girer.
- **G3. Fovea kartı** ○ — sinyal/karar anında tek kart: yıllık→aylık→günlük/2s bağlam; ölçüm Python'da, anlatım LLM'de (ölçüm→anlatım ayrımı, ayna kuralı buradan sisteme yayılır). Kart: hipotez bağlamına + defter sinyal kaydına + (Kademe 4) karar denetçisine.
- **G4. Giriş/çıkışın ilk ayrılması** ○ — monolitik strategy'den entry/exit modüllerine iskelet ayrımı (TUR C fark #4). Tam mimari Kademe 2/AKIL'da derinleşir; burada ChoCh-çıkış takılabilir hale gelir.
- **G5. KAPANIŞ SINAVI — İlk Ege Hipotezi** ‹E 11 Haz› — "GİRİŞ: DH patlama + ÇIKIŞ: ChoCh" ailesi class kapısından ölçülür; kombinasyon uzayı jarvis'e açık ("dar değil geniş"). Sonuç ne olursa olsun rapor: class + neden + alternatifler.
- *(Z7 cevabı "yok" çıktıysa: tavan/taban modeli + veri düzeltmesi işleri bu kademenin başına girer — patlama avcısı gerçek dünyada yaşasın.)*

**BİTTİ TANIMI:** rastgele bir sembolün görüş dosyası insan-okur halde ✚ bir sinyal kartında yıllık/aylık/saatlik bağlam satırları ✚ BoS/ChoCh + FVG kapıdan ölçülmüş ✚ Ege hipotezinin class raporu yazılmış.

---

# KADEME 2 — AKIL: kendi kendini besleme
**amaç:** jarvis üretsin, ölçsün, ÖĞRENSİN — döngü kendi kendine dönsün.

- **A1. Tohum dilbilgisi (typed roles)** ◆F — her hipotezde ≥1 gerçek giriş üreticisi + zorunlu çıkış + tempo etiketi; teyitçiler (DH) ayrı sınıf; görüş dosyasından (G1) beslenir. **k1 çıktı format tamiri bunun parçası** (gpt-oss/gemini-flash %0 vakası — şablon + parse).
- **A2. Ölü-bölge madeni** — 22k stillborn + 21k 0-trade "çöp" değil ilk ders: hangi parametre bölgeleri ölü → tohum bankasına "buraya girme" haritası (kayıp=altın ‹E›).
- **A3. Soru soran akıl** ‹E 10 Haz› — sistem kendi merak sorusunu üretir ("en iyi DH sonuçları HANGİ hisselerde, NEDEN?"), ölçüm Python'da cevaplar, çıkarım tohum üretimini yönlendirir.
- **A4. Free roam dirilişi** — TUR C: kod var, orchestrator'a bağlı değil (pusuladaki sonsuz "🧭 ?"ın nedeni). Bağla + çıktı zorunlu alanları + "boş çıktı başarı sayılmaz".
- **A5. Refleks modları** ‹E 2-4 Haz› — ayrı LLM değil MOD: önce **PROMETE** (paralel evrim) + **NEBULA** (paradigma kırma) güçlü; destek ABYSS/MAGMA/PHANTOM/NOUS sırayla; MIRROR zaten canlı.
- **A6. Kendi-edinme hattı** ‹E 10 Haz› — periyodik dış tarama (indikatör/teknik/kütüphane + temel analiz başlangıcı: KAP/mali tablo); küçükse kendi ekler, büyükse onay (§12 sınırları); her edinim class kapısı + anti-deneme listesinden geçer. Teknik repertuvar v1 (20 konsept) ilk yem.
- **A7. Felsefe katmanı + çoklu tempo + zaman-ufku uyumu** *(v4: 5-7-8)* — philosophy_mix, tempo boyutu (aylık/haftalık/günlük), esneme payları (kısa %1 / orta %10-20 / uzun yapısal), uyumsuz kombinasyon reddi; sayılar başlangıç değeri ‹E›.

**BİTTİ TANIMI:** stillborn <%5 yapısal ✚ kapıdan geçen İLK KARANTİNA ADAYI ✚ sistemin kendi sorduğu bir soruya ölçülmüş cevap+çıkarım kaydı ✚ free roam pusulasında gerçek bulgu ✚ farklı tempolu hipotezler loglarda.

---

# KADEME 3 — ZİHİNLER: LLM kalitesi
**amaç:** "sistem benim gibi yargılasın" ‹E 10 Haz› — isim ezberi değil kanıtla model seçimi; her çağrı sistemi tanısın.

- **M1. Kalite-bazlı seçim** — karne (canlı ✓) → politika: model×görev matrisi, eşik altı çekilir + 24s sonra yeniden şans, tempo=kalite×hacim, bağlam penceresi ölçüt, boş çıktı başarı değil.
- **M2. Kalite katmanı anahtarları** — NVIDIA NIM (DeepSeek/Kimi), Mistral, SambaNova — Ege 10 dk; karne değerlendirir, hepsi değil kaliteliler kalır.
- **M3. Çağrı haritası + BOOT** ‹E 10-11 Haz: "gelen LLM nereden anlayacak"› — tek ekran BOOT.md (kim/ne/şu an/yasaklar/bugünün işi) her çağrıya; göreve göre konusal bölme; jarvis iç hatlarına (K1/ayna/serbest/analist) görev-uyumlu sistem tanıtımı; Pluton Dev zinciri sadeleşir; "ilk defa duyuyorum" teknik olarak imkansızlaşır.
- **M4. ege_sozleri enjeksiyonu** — K1/MIRROR/FREE_ROAM'a tamamlanır + S2 kullanım denetimiyle "biliyor ama kullanıyor mu" kanıtlanır.

**BİTTİ TANIMI:** rastgele bir iç çağrının prompt'u açıldığında sistem tanıtımı içinde ✚ model seçimi loglarda kalite-gerekçeli ✚ kalite %'si gerçeği yansıtıyor (boş çıktı düşürür) ✚ en az 1 yeni kalite sağlayıcısı karneyle kabul/red edilmiş.

---

# KADEME 4 — SAHA: defterden paraya
**amaç:** unvan backtest'te değil sahada kazanılır ‹E 5 Haz›.

- **S1. Class-defterde mekanizması** — backtest en fazla "karantina adayı" der; SS/S/A unvanı defterin ileriye dönük kaydından; her elemede "neden kazandı/kaybetti, alternatif neydi" notu.
- **S2. Postmortem hattı** — Temmuz başı ilk hasat (4 Haz sinyalleri ~20 iş günü); MFE/MAE birikimi çıkış mimarisinin (v4/10) ampirik temeli — çıkış araştırması bu veriden doğar, icat edilmez ◆F.
- **S3. Karar denetçisi dirilişi** — 3.700 satır uyuyan kod (signal_evaluator, position_manager, debate); pre-trade context + fovea kartı (G3) ile "tahtacıyı anlayan" ikinci göz.
- **S4. DH → patlama avcısı tam evrimi** *(v4/9)* — ex-ante sınıflandırıcı (ralliden ÖNCE ölçülebilen özellikler; isim listesi doğrulama seti), sert düşüşten zamanında çıkış, bu sınıfa özel AYRI sistem (spec sistemden ‹E 9 Haz›), DH skor paradoksu (4/5>5/5) non-lineer çözülür.
- **S5. Shadow → canlı anayasası** — "çıkış düzelmeden shadow yok" kuralı korunur; canlı = Ege sözüyle (§12); emir kapısı araştırması (AlgoLab boşluğu).

**BİTTİ TANIMI:** ilk pozitif postmortem ✚ karantinadan defter-unvanına ilk geçiş işliyor ✚ denetçi yorumu emir öncesi loglanıyor.

---

## SÜREKLİ KATMAN *(görev değil nöbet — tek şeridi bozmaz)*
- **N1. Öz-kontrol + kalite saatleri** ‹E 10 Haz› — günde 1-2 sabit saat: sağlık + regresyon ("çözülen X tekrar bozuldu mu") + ÜRETİM KALİTESİ (doluluk, boşa çağrı, karne trendi). 21:00 raporuna "öz-kontrol satırı".
- **N2. Girdi kullanım denetimi (S2)** — her Ege girdisi: nerede, kullanılıyor mu; kayıp=0.
- **N3. Pluton Dev yorum yetkisi (S3)** — her raporda "ne gördün / risk / öneri".
- **N4. Haftalık maliyet ölçümü** — DeepSeek paneli; $20/ay tavan ‹E onayı›, $5+/ay yeni kalem onaylı.
- **N5. 21:00 raporu birlikte okuma** — Ege'nin 2 dakikalık hakimiyet penceresi.

## DUVARLAR & RANDEVULAR
- **22 Haziran:** Fable penceresi — M2 tasarımı + v5 işleyişi bu pencerede oturmalı. **15 Haziran:** ölçüm ayı + Anthropic $100 kredi maili claim kontrolü. **Temmuz başı:** ilk postmortem. **Bekleyen:** VKN/KDV · THF→ASELS sonrası AEGIS güncellemesi · Telegram bot token rotasyonu (token sohbette açığa çıktı) · DeepSeek balance alert AÇ.

## v4 → v5 EŞLEME *(silinen yok)*
S1-S3→Nöbet · Keşif ✓ · 0→Z4 · 0b ✓ (kokpit/karne) · 1→A1-A2 · 2→Z1-Z3+Z7 · 3→G3(ayna kuralı)+Z6c · 4→A4 · 5→A7 · 6→S1(class) · 7-8→A7 · 8b→A3 · 9→S4 · 10→S2(saha) · 11→G2+G5 · 12→S4 içi · 13→Kademe 2 sonrası mimari (çok-başlı, AKIL bitince) · 13b→A6 · 14→M1 · 15→S3 · 16→✓(havuz)+M2 · 16b→M3 · 17→Kademe 4 sonrası · 18→Kademe 2/öz-denetim (overfit, A-class adaylar doğunca) · 19→Kademe 4 içi rejim · 20-21→M3+N2 · 22→✓(tek kapı çalıştı: v4 yüklemesi) · 23-25→UFUK (kademe 4 sonrası, sırası gelince).

*tek şerit, kapılı kapılar, yaşayan plan. her kademe kapanışında bu dosya güncellenir ve kapanış Ege'yle birlikte mühürlenir.*
