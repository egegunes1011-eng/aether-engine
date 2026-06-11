# YAPILACAKLAR HARİTASI — v4 (karma: Ege + Fable)
### vizyonu hayata geçiren, alt-adımlı, kanıtlı eylem planı
*her madde: HEDEF · ŞİMDİ · ADIMLAR · KANIT · BAĞIMLILIK*
*işaretler: **‹E›** = Ege'nin sözü (tarihli) · **◆F** = Fable bulgusu/önerisi · işaretsiz = v2 mirası. **v2'den tek madde silinmedi.***

> **ESNEKLİK İLKESİ ‹E 10 Haz›:** bu plana ölesiye bağlı değiliz. yan iş çıkarsa halledip geçeriz; akış daha uyumlu bir işe götürüyorsa gideriz. plan pusula, kelepçe değil.
> mantık: SÜREKLİ KATMAN hep çalışır. Yol: KEŞİF → TEMEL → AKIL → STRATEJİ → LLM → ÖZ-FARKINDALIK → HAFIZA → UFUK.

---

# YOL — Ege'nin sırası (omurga) ‹E 9-10 Haz›
1. **Haritalar** — vizyon v4 ✓ + bu plan
2. **KEŞİF TURU** — Pluton Dev'de Fable 5: VPS'in tamamını salt-okuma tanıma; sistem, dosyalar, bilinen+bilinmeyen her hata
3. **ÇÖZÜMLER** — keşfin bulgularıyla güncellenmiş FAZ 0'dan başlayarak
4. **KALİTELİ LLM SEÇİMİ** — havuz denenir, karneyle seçilir, anahtarlar açılır
5. **VPS DOSYA HARİTASI** — keşfin çıktısı kalıcı haritaya dönüşür
6. **FELSEFEYE UYGUN YAŞAM** — sistem bütün sohbetlerdeki felsefeyle çalışır; gerisi beraber kararlaştırılır
- ◆F duvar bilgisi: Fable, Max paketinde **22 Haziran'a kadar ek ücretsiz** (23'ünden itibaren ayrı kredi). Keşif + en ağır düzeltmeler bu pencereye denk gelirse bedavaya gelir. Acele sebebi değil, bütçe duvarı.

---

# ★ SÜREKLİ KATMAN — fazlardan bağımsız, hep açık

### S1. Periyodik öz-kontrol (self-audit)
- hedef: sistem belirli aralıklarla durup "her şey yolunda mı, yeni sorun/bozulma var mı" diye kendini yoklasın. **‹E 10 Haz› bazı saatlerde sistem KENDİ KALİTESİNİ de kontrol etsin** — sadece sağlık değil, ürettiğinin kalitesi (bulgular dolu mu, çağrılar boşa mı gidiyor, karne düşüyor mu).
- şimdi: MIRROR anlık bakıyor; regresyon/sağlık taraması yok; yanlış alarm veriyor; kalite öz-bakışı yok
- adımlar: a) periyodik sağlık taraması (servis, DB, kota, hata oranı) b) **regresyon kontrolü** — çözülen şey tekrar bozuldu mu c) yeni hata/performans düşüşü tespiti d) ★ günde 1-2 sabit saatte **kalite öz-denetimi**: çıktı doluluk, boşa giden çağrı oranı, karne trendi e) bulguları doğrulama katmanından geçir (yanlış alarm yok) f) ciddi sapmada Ege'ye özet
- kanıt: günde en az 1 öz-kontrol raporu, "çözülen X tekrar bozulmadı" teyidi, kalite trendi satırı
- bağımlılık: ayna doğrulama (FAZ 0)

### S2. Girdi kullanım denetimi
- hedef: Ege'nin attığı HER uzun yazı/talimat/doküman nerede, işe yaradı mı, kullanılıyor mu
- şimdi: hiç denetlenmedi — yazılar atıldı ama "kullanılıyor mu" bilinmiyor; bazıları kaybolmuş olabilir (arşivlerin VPS'e indiği bile belirsiz)
- adımlar: a) tüm Ege girdilerinin envanteri b) her birinin sistemde NEREDE kullanıldığı (hangi prompt/modül/karar) c) "duruyor ama kullanılmıyor" olanları işaretle d) kaybolan/ulaşmayan dosyaları tespit et — ◆F ilk iş: son_aı arşivleri VPS'e gerçekten inmiş mi doğrula e) kullanım kanıtı: "şu söz, şu prompt'ta, şu çağrıda"
- kanıt: girdi→kullanım haritası, kullanılmayan/kayıp liste
- bağımlılık: yok (hemen başlanabilir)

### S3. Pluton Dev özgürlük + yorum yetkisi
- hedef: Pluton Dev iş sırasında fazladan araştırsın, yorumlasın, gördüğü riski/fırsatı söylesin
- şimdi: kısmen veriliyor ama sistematik değil
- adımlar: a) her işte "ne gördün, ne risk, ne öneri" yorumu zorunlu b) uzun iş tmux, başında bekleme yok c) sorunları Pluton Dev'e sorup "nasıl çözülür" yorumlatma — hem yapan hem gören
- kanıt: her raporda yorum/risk bölümü
- bağımlılık: yok

---

# ADIM 1 — KEŞİF TURU ‹E 10 Haz› *(çözümden ÖNCE teşhis)*
- hedef: Fable düzeyinde bir aklın VPS'in TAMAMINI görmesi — "kimse sistemin bütününü gerçekten görmedi" probleminin çözümü
- şimdi: bilgi parça parça; dosya haritası yok; ateş raporu kendi içinde çelişiyor; kaybolan dosyalar belirsiz
- kurallar: **salt okuma — kod/config değişikliği YOK**; bolca özgürlük; birkaç tur; her bulgu kanıtlı (dosya yolu + satır/çıktı); rapor Türkçe
- turlar:
  - a) **envanter turu:** container'lar, servisler, cron'lar, DB şeması + tablo doluluk sayıları, /opt/pluton dosya ağacı, çalışan/ölü süreçler
  - b) **sorun avı:** bilinen sorunların doğrulanması (DB kopukluğu, stillborn, üç çelişkili test, serbest dolaşım boş çıktı, SDK timeout, İngilizce rapor) + ◆F ateş raporu çelişkilerinin kaynağı ("11689 test edildi" neyi sayıyor, tohum PF=1.62 nereden, KOTA 31300=31300 nasıl, kalite %68'e ne giriyor) + **bilinmeyen** sorunların keşfi
  - c) **felsefe uyum denetimi:** vizyon v4 madde madde — kodda karşılığı var mı, yarım mı, hiç yok mu (kâğıt/kod farkı tablosu)
- çıktılar: 1) VPS dosya haritası 2) önem-sıralı sorun envanteri 3) bilinmeyenler/şüpheler listesi 4) Pluton Dev'in kendi yorumu + önerileri
- kanıt: üç tur raporu docs/ altında; her iddia kanıt satırıyla
- bağımlılık: haritaların VPS'e inmesi (girdi tek kapı, FAZ 5/22)

---

# FAZ 0 — TEMEL: motor nefes alsın *(keşif bulgularıyla güncellenir)*

### 0. ◆F Tek kanonik test girişi — bağımlılık: yok *(sıfırıncı madde: bu olmadan hiçbir düzeltme kanıtlanamaz)*
- hedef: aynı soruya tek cevap · şimdi: aynı config'e üç farklı sonuç (golden master 0 trade / çelişki testi 0 / ZOREN trace 29)
- adımlar: a) tek fonksiyon `run_canonical_backtest(config, universe, window, seed)` — bütün test/golden-master/jarvis-K2 yolları SADECE bunu çağırır b) her koşu config_hash + evren + pencere + seed'i sonuçla birlikte kaydeder c) 8 Haziran'ın üç çelişkili sonucunun her birinin hangi pencere/parametre/yoldan geldiğini geriye dönük tespit — fark tablosu
- kanıt: aynı girdiyle iki koşu birebir aynı sonuç (hash eşit); çelişki vakası açıklanmış

### 0b. ◆F DB bağlantısı + anında kayıt + rapor sayaç tutarlılığı — bağımlılık: yok
- hedef: dürüstlük sayacı çalışsın, rapor kendi içinde tutarlı olsun · şimdi: binlerce hipotez üretiliyor, parameter_trials'a 0 kayıt; ayna aynı bulguyu 3x basıyor; kota/hat sayaçları uyuşmuyor
- adımlar: a) Jarvis→pluton_core bağlantısını onar (neden: network/auth/servis — keşif turu söyleyecek) b) "üretilen HER hipotez anında parameter_trials'a" kuralını doğrula c) ayna bulgularına tekrar-ayıklama (dedup) d) rapor sayaçlarını tek kaynağa bağla (KOTA, hat toplamları, "test edildi" etiketi — üretilen ≠ test edilen ayrımı)
- kanıt: üretim sayısı = DB kayıt sayısı; raporda aynı bulgu bir kez; sayaçlar birbirini tutuyor

### 1. Tohum kalitesi — bağımlılık: 0
- hedef: anlamlı, çeşitli hipotez üretimi · şimdi: %99 çöp (22k stillborn + 21k 0-trade), kapıdan geçen 0
- adımlar: a) DH'yi search space + sanity'den TAM çıkar (engine değil, teyit mekanizması) b) K0 rastgele üretimini gerçekçi parametre aralıklarına çek (canlı çalışan değerleri taban al) c) stillborn ve 0-trade oranını canlı izle d) üretilen hipotezlerin gerçekten farklı parametre aldığını doğrula e) ◆F **tohum dilbilgisi (typed roles):** her hipotezde en az 1 gerçek giriş üreticisi zorunlu, çıkış zorunlu, tempo etiketi zorunlu; teyitçiler (DH gibi) ayrı sınıf — ölü doğum yapısal olarak imkansızlaşır f) ◆F **stillborn madenciliği:** 22k ölü doğum + 21k sıfır-trade kaydı "çöp" değil ilk öğrenme verisi — hangi parametre bölgeleri ölü, tohum bankasına "buraya girme" haritası olarak beslenir (kayıp=altın felsefesinin ilk uygulaması)
- kanıt: stillborn < %5, completed > 0, parametre çeşitliliği loglanıyor, ölü-bölge haritası var

### 2. Backtest hızı + veri gerçekliği — bağımlılık: 0
- hedef: tek backtest dakikalar VE sonuçlar gerçek hayatta yaşanabilir · şimdi: 8 saat (601 sembol), zamanın ~%95'i prepare()'de; ◆F iki görünmez mayın hiç sorulmamış
- adımlar: a) düşük meyve (backtest'te _scan_diagnostics kapat + events_log sınırla + equity_curve seyrek) b) **sinyal-güdümlü motor** — boş günleri atla, sadece sinyal + pozisyon-açık barlar c) trailing stop'u vektörel çöz d) prepare() optimize (gereksiz .copy() kaldır) e) her aşamada golden master (artık kanonik giriş üstünden) ile sonuç korunduğunu doğrula f) ◆F **tavan/taban denetimi:** BIST fiyat limitleri SimulatedBroker'da modelleniyor mu — tavanda kilitli hissede "alamazsın"; patlama avcısı backtestleri bu modellenmeden masal olur g) ◆F **veri düzeltmesi denetimi:** bedelli/bedelsiz/temettü düzeltmesi veri kaynağında var mı — yoksa DH'nin zirve-düşüş hesabı bu hisse sınıfında çöptür. İkisi de önce SORU: keşif turu cevaplasın, eksikse buraya iş açılır
- kanıt: 20 sembol < 30s, 601 sembol < 30dk, trade sayısı + PF birebir aynı; tavan/taban ve düzeltme durumu raporlanmış

### 3. Ayna doğruluğu — bağımlılık: 0b
- hedef: güvenilir bulgu · şimdi: yanlış alarmlar + tekrarlar
- adımlar: a) MIRROR'ın her sistem iddiasını gerçek kontrolle teyit et (DB için ping+count) b) doğrulanmamış iddia "kesin" diye rapora düşmesin c) yanlış-pozitif oranını izle d) ◆F **ölçüm→anlatım ayrımı:** LLM hiçbir sistem durumunu kendisi iddia edemez — ölçüm Python'da, anlatım modelde; bu ayrım kurulunca o hata sınıfı topluca kapanır
- kanıt: yanlış alarm sıfırlanır, her iddia kanıtlı

### 4. Serbest dolaşım + rapor kalitesi — bağımlılık: yok
- hedef: dolu, anlamlı bulgu · şimdi: çağrıların yarıdan fazlası (1233) serbest dolaşımda ve çıktı "? ? ?" — en büyük tüketici sıfır işe yarar üretiyor
- adımlar: a) çıktıların nereye yazıldığını bul: üretim mi boş, parse mı kırık b) title/summary zorunlu alan fix c) ege_sozleri enjeksiyonunu K1/MIRROR/FREE_ROAM'a tamamla d) kalite satırı + class dağılımı rapora e) karnenin "işe yarar" tanımını sıkılaştır (boş çıktı başarı sayılmasın — kalite %68 yanılgısı düzelir) f) rapor §14 güvenilirlik anayasasına bağlanır: kanıtsız sayı girmez
- kanıt: serbest bölümü dolu, 1 gerçek istek/bulgu rapora düşer, kalite yüzdesi gerçeği yansıtır

---

# FAZ 1 — AKIL İSKELETİ: jarvis nasıl düşünecek

### 5. Felsefe katmanı (kod) — bağımlılık: FAZ 0
- hedef: rakamla değil felsefeyle düşünme · şimdi: keşfedildi, kod yok
- adımlar: a) philosophy_mix'i (momentum/value/breakout/mean-reversion vb.) hipotez üretimine kodla b) time_horizon'u parametreye bağla c) her hipoteze "felsefe kimliği" d) felsefe kapıyı değiştirmesin, sadece üretimi çeşitlendirsin
- kanıt: üretilen hipotezler farklı felsefelerden, loglanıyor

### 6. Class kapısı (One Punch Man) — bağımlılık: FAZ 0
- hedef: "bu hangi class?" · şimdi: ham PF rakamı
- adımlar: a) SS(%10000+)/S(%1000+)/A(%500+)/B(%250+)/C(altı) derecelendirmesini kodla b) C ve altı otomatik arşiv (ama silinmez — veri/öğrenme olarak yaşar) c) A+ üstünü öne çıkar/banka d) "PF iyi mi" yerine class diliyle raporla e) ◆F **class defterde kazanılır:** backtest en fazla "karantina adayı" der; SS/S/A unvanı sinyallerin ileriye dönük gerçek kaydından (defter/forward) gelir — Ege'nin "sahada artıda kalamayan elenir, ama neden sorusu şart" bakışının kodu; class ile dürüstlük kapısının gizli kavgasını da çözer
- kanıt: her tamamlanan hipotez class etiketi alır; unvan yükselmesi defter verisiyle

### 7. Çoklu tempo + esneme payı — bağımlılık: FAZ 0, 5
- hedef: her stratejinin kendi tutma süresi + esnek stop'u · şimdi: tek tip sabit
- adımlar: a) tempo boyutu (aylık/haftalık/günlük) b) esneme payı: kısa %1, orta %10-20, uzun "yapısal kırılana kadar" c) sabit stop/TP dogmasını kaldır, hipotez yapısına bağla d) TERA tipi (düş-sonra-patla) senaryosunu test et
- kanıt: farklı tempolu stratejiler üretiliyor, esneme payı çalışıyor

### 8. Zaman-ufku uyumu — bağımlılık: 7
- hedef: giriş-çıkış tempo eşleşmesi · şimdi: yok
- adımlar: a) her giriş ve çıkışa zaman-ufku etiketi b) kombinasyonda uyum kontrolü c) uyumsuzu (aylık giriş + saatlik çıkış) reddet d) modülerlik esnek — bir parça hem giriş hem çıkış olabilsin (VWAP gibi)
- kanıt: uyumsuz kombinasyonlar otomatik elenir

### ★ 8b. Soru soran akıl ‹E 10 Haz› — bağımlılık: FAZ 0, defter
- hedef: sistem kendi merak sorularını üretip cevaplasın — "en iyi DH sonuçları HANGİ hisselerde görülüyor ve NEDEN", "bu kombinasyon neden burada çalışıp şurada çalışmıyor" gibi
- şimdi: yok; analiz sadece istenince yapılıyor
- adımlar: a) soru üretici (defter + arşiv + stillborn madeninden beslenen) b) cevap hattı: ölçüm Python'da, yorum LLM'de c) bulgular Potansiyel Haritası'na + rapora d) en iyi sorular tohum üretimini yönlendirir
- kanıt: haftada birkaç "soru→ölçülmüş cevap→çıkarım" kaydı

---

# FAZ 2 — STRATEJİ DERİNLİĞİ

### 9. DH → patlama avcısı — bağımlılık: FAZ 0, 1
- hedef: DH'yi kat kat aşan al-sat dedektörü · şimdi: DH çekirdek güçlü ama yalnız
- adımlar: a) DH'yi tam al-sat dedektörüne evir (giriş+çıkış) b) patlama hisse sınıfını (KTLEV/TERA + ~30-50) ayırt eden sınıflandırıcı — ◆F **ex-ante tanımla:** sınıf ralliden ÖNCE ölçülebilen özelliklerle kurulur (volatilite profili, likidite katmanı, fiyat aralığı, hacim; Hurst karakter filtresi hazır ilk feature), senin isimlerin doğrulama seti olur — listeden sınıf kurmak sonucu sebep sanmaktır c) sert yükselişi patlamadan önce yakalama d) sert düşüşten (en büyük tehlike) zamanında çıkış e) bu sınıfa özel esneme payı (TERA mantığı) f) ‹E 9 Haz› bu sınıfa özelleşmiş AYRI sistem ayrı çalışır — spec Ege'den değil, sistemden g) ◆F **DH skor paradoksu** (4/5 > 5/5 — devirde kanıtlı): lineer toplam çöktü; kombinasyon mantığı non-lineer kurulmalı
- kanıt: patlama hisselerinde A+ class sonuç (defterde), erken giriş + korunan çıkış

### 10. Çıkış mimarisi (yeniden) — bağımlılık: 9, defter
- hedef: güçlü çıkış · şimdi: ASIL darboğaz (giriş edge'i var, çıkış zayıf)
- adımlar: a) ◆F **başlangıç icat değil ölçüm:** defter her sinyalin ileriye dönük MFE/MAE'sini biriktiriyor — "girişlerimizden sonra zirveler ne zaman, ne büyüklükte" sorusunun ampirik cevabı Temmuz başından itibaren birikir; çıkış araştırması bu veriden doğar b) çıkışı sıfırdan tasarla — "daha çok feature" DEĞİL c) çıkışların ortak özelliğini araştır (Ege isteği; "her gün delicesine peak çalıştırması") d) strateji başına ayrı çıkış e) en iyi çıkış tipini class'a göre seç f) ◆F **Phoenix capture K05 / "SIKLAŞTIR" tasarımı** devirde hazır ama uyuyor — diriltilip test edilir
- kanıt: aynı girişte çıkış iyileşince defter class'ı yükselir

### 11. LuxAlgo kavramları + kombinasyon keşfi — bağımlılık: FAZ 1
- hedef: weak high / strong low yardımcı sinyal + ‹E 10 Haz› **DH+LuxAlgo'nun ötesi:** farklı farklı eklemeler, başka kombinasyonlar da denenir — ikili sabit değil, kombinasyon uzayı açık
- şimdi: yok
- adımlar: a) market-structure kavramlarını BIST'e uyarla (kopya değil) b) giriş-çıkış yardımcısı olarak ekle c) DH ile birleştir d) ★ kombinasyon üreticisi: DH+X, LuxAlgo+Y, üçlü karmalar — class kapısından geçir e) en iyi kombinasyonlar "neden çalıştı" sorusuyla (8b) anlaşılır
- kanıt: birden çok kombinasyon test edildi, class ölçüldü, "neden" notu var

### 12. Kazanan hisse deseni — bağımlılık: 9
- hedef: kazananların ortak özelliğini öğrenme · şimdi: yok
- adımlar: a) geçmiş kazanan hisseleri/trade'leri topla b) ortak özellik çıkar (volatilite/sektör/hacim/zaman ufku) c) bu deseni yeni tarama/seçime besle d) ‹E 3 Haz› yıl-içi-oynak ikinci fırsat sınıfı da aynı yöntemle işlenir
- kanıt: desen-tabanlı seçim, "şu özellik kazandırıyor" raporu

### 13. Çok-başlı CERBERUS — bağımlılık: FAZ 1, 2
- hedef: birkaç farklı sistem paralel · şimdi: engine'ler var ama tek akış
- adımlar: a) çoklu-sistem mimarisini netleştir b) her "baş" farklı felsefe/tempo c) sistemler arası çakışma/dengeleme
- kanıt: birden çok bağımsız strateji-sistemi paralel çalışır

### ★ 13b. Kendi edinme hattı ‹E 10 Haz› — bağımlılık: FAZ 1, anti-deneme listesi
- hedef: sistem **dışarıda ne var diye kendisi araştırır** ve kendi içine kendi ekler — bir sürü indikatör, yeni teknikler, ve **temel analiz** (kendi kendine alır, geliştirir); "onca LLM çağrısı var" — bu işe koşulur
- şimdi: özerk edinme vizyonda var, operasyonel hat yok; haber (ORACLE) ayrı — bu, araç/yöntem/veri taraması
- adımlar: a) periyodik dış tarama görevi (yeni indikatörler, kütüphaneler, yöntemler; GitHub/literatür) b) bulguyu Potansiyel Haritası'na yaz → küçükse kendi ekler, büyükse Ege onayı (§12 özgürlük sınırları geçerli) c) temel analiz edinimi: KAP/mali tablo verisinden başlayıp sinyal-destek katmanı kur d) eklenen her şey class kapısı + anti-deneme listesinden geçer e) edinilen şey işe yaramazsa kanıtıyla arşive
- kanıt: ayda birkaç yeni edinim denemesi, her biri ölçülmüş; en az biri sisteme kalıcı girer ya da kanıtla elenir

---

# FAZ 3 — LLM ZEKASI

### 14. Kalite-bazlı seçim — bağımlılık: FAZ 0
- hedef: en iyi modeli sürekli seç · şimdi: karne yarım; ‹E 10 Haz› **sistem benim gibi yargılasın:** "nemotron dandik olabilir ama deepseek kaliteli olabilir" — örnek, emir değil; isim ezberi değil kanıta dayalı, esnek, potansiyel arayan yargı
- adımlar: a) karneyi tamamla b) model × görev kalite matrisi c) düşük karneli model görevden çekilir, 24s sonra yeniden şans d) tempo = kalite × hacim e) bağlam penceresi de ölçüt (dar bağlamlı model dar işe) f) boş/işe yaramaz çıktı başarı sayılmaz (FAZ 0/4 ile)
- kanıt: karne dolu, seçim rastgele değil kalite-bazlı, "en iyi/en kötü" satırları gerçeği yansıtıyor

### 15. Karar denetçisi ("tahtacı") — bağımlılık: FAZ 0
- hedef: AL/SAT öncesi uzman LLM gözden geçirsin · şimdi: ◆F "yok" değil — **3.700 satır uyuyan kod var** (signal_evaluator, position_manager, debate, candle_patterns); sıfırdan değil diriltmeyle gelir
- adımlar: a) uyuyan kodu keşif turunda envantere al b) pre-trade context (hissenin geçmiş performans yazısı) c) teknik-analiz uzmanı LLM "neden bu sinyal, son durum, eskiden ne diyordu" d) denetçi onaylar/reddeder e) tüm stratejilerde "ikinci göz"
- kanıt: emir öncesi denetçi yorumu loglanır

### 16. Havuz genişletme — bağımlılık: yok
- hedef: bol ücretsiz + kaliteli · şimdi: 8 healthy / 16 dead / 8 rate-limited / **24 anahtar bekliyor**
- adımlar: a) Cerebras (1M token/gün) bağla b) Gemini Flash c) Groq yüksek-limit d) NVIDIA NIM (DeepSeek/Kimi — kalite katmanı) e) ★ bekleyen 24 anahtar: hangi sağlayıcılar değer (karne + bağlam + limit), Ege onayıyla hesaplar açılır — hepsi değil, kaliteli olanlar f) çoklu-sağlayıcı fallback + 429 backoff g) $0 çizgisi korunur
- kanıt: günlük kapasite katlanır, $0 korunur, ölü model oranı düşer

### ★ 16b. LLM ÇAĞRI HARİTASI ‹E 10 Haz› — bağımlılık: KEŞİF TURU, FAZ 5/20-21
- hedef: **her LLM çağrısı** (jarvis hatları + Pluton Dev oturumları + gelecek her akıl) sistemi görüp anlayıp tanısın — "normal Pluton Dev çağrımında bile birçok şeyi görmüyor"; arkamızda her çağrının okuyacağı bir harita bırakılır
- şimdi: zorunlu okuma zinciri var ama şişkin ve sadece Pluton Dev'e; jarvis'in iç çağrıları sistemi tanımıyor
- adımlar: a) ◆F **katmanlı bağlam paketi:** tek ekranlık BOOT (kim/ne/şu an/yasaklar/bugünün işi) her çağrıya; göreve göre ilgili konusal bölme eklenir — her şeyi her çağrıya dökmek değil (kota+bağlam duvarı), ihtiyacın haritasını vermek b) keşif turunun VPS dosya haritası bu paketin çekirdeği olur c) jarvis hatlarına (K1/serbest/ayna/analist) görev-uyumlu sistem tanıtımı enjekte d) Pluton Dev zinciri BOOT üstünden sadeleşir e) "ilk defa duyuyorum" yasağı teknik olarak imkansızlaşır
- kanıt: rastgele bir çağrının prompt'u açıldığında sistem tanıtımı içinde; Pluton Dev oturum başı okuma süresi düşer, yarım iş azalır

---

# FAZ 4 — ÖZ-FARKINDALIK

### 17. Sermaye farkındalığı — bağımlılık: FAZ 2
- hedef: paraya göre adapte (200K'da bir, 1M'de başka) · şimdi: yok
- adımlar: a) sistem içindeki sermayeyi bilsin b) pozisyon büyüklüğü sermayeye ölçekli c) sermaye eşiklerine göre strateji/risk değişimi d) büyüdükçe likidite kısıtı farkındalığı
- kanıt: farklı sermayede farklı davranış

### 18. Öz-denetim (overfitting) — bağımlılık: FAZ 2
- hedef: "overfitting mi? en iyi mi?" · şimdi: yok
- adımlar: a) walk-forward / OOS holdout her A+ adaya b) "bu gerçekten en iyi mi" karşılaştırması c) aşırı-uyum bayrağı d) eleme mekanik cellat değil: her elemede "neden bu kadar kazandı/kaybetti, alternatif neydi" notu (Ege bakışı, vizyon §2)
- kanıt: overfit adaylar işaretlenir + neden notlu, sağlamlar ayrılır

### 19. Piyasa nefesi + kriz — bağımlılık: FAZ 2
- hedef: rejim/anomali farkındalığı, krizde adapte · şimdi: yok
- adımlar: a) piyasa rejimi algısı (trend/yatay/kriz) b) yıllık-perspektif bakış c) kriz/anomalide davranış değişimi d) "bu en iyi mi" diye krizde yeniden sorgula
- kanıt: rejim değişiminde sistem davranışı uyarlar

---

# FAZ 5 — HAFIZA & SÜREKLİLİK

### 20. İlerleme defteri (mükemmel hafıza) — bağımlılık: yok
- hedef: sürekli ilerleme/öğrenme notu · şimdi: kısmi (current_status)
- adımlar: a) "nerede kaldı / ne öğrendi / ne deneyecek" düzenli defteri b) jarvis kendi keşiflerini buraya yazsın c) makine-okur + insan-okur d) üç katmanlı hafıza (anayasa / konusal arşiv / semantik) + konusal bölümleme buraya bağlanır (vizyon §10)
- kanıt: her oturum defterden devam edebilir

### 21. Her LLM zorunlu okuma — bağımlılık: 20, 16b
- hedef: harita direkt erişilebilir · şimdi: Pluton Dev sık bulamıyor; zincir şişti
- adımlar: a) vizyon + bu plan + envanter zorunlu zincirde b) ◆F zincirin başı tek ekran BOOT.md — gerisi ihtiyaçta c) erişim yolu net d) ◆F **LTR fiziksel sarmalayıcı:** iki dakikayı aşabilecek her komut tmux sarmalayıcısından geçmek ZORUNDA — ajanın disiplinine güvenme, 600s kopmaları yapısal kapansın
- kanıt: yeni LLM sıfırdan öğrenmez; timeout kopması sıfıra iner

### 22. Kaybolan dosyalar + girdi tek kapı — bağımlılık: S2
- hedef: hiçbir girdi kaybolmasın · şimdi: belirsiz (yüklenip kaybolanlar; Telegram/limewire fiyaskosu)
- adımlar: a) ◆F **tek giriş kapısı ilan:** uzun dosya = GitHub'a web'den yükle → Pluton Dev pull çeker; başka yöntem denenmez b) yüklenen her dosya anında diske + kayda c) hangi dosya ulaştı/kayboldu denetimi d) kayıp varsa Ege'ye bildir
- kanıt: dosya envanteri, kayıp = 0

---

# FAZ 6 — UFUK *(sonra)*
- **23. EDVIN diriltme** — rafta, akıl oturunca; "hayat arkadaşı" katmanı
- **24. Açılım** — VIOP / Amerikan borsası / prop firma (BIST'te yok)
- **25. Canlı para** — emir kapısı araştırması (AlgoLab kapandı — boşluk) + canlıya geçiş anayasası (birlikte) + karar denetçisi emniyet supabı + sanal test fazı

---

# ◆F DUVARLAR & RANDEVULAR *(takvim baskısı değil — duvar ve randevu bilgisi)*
- **22 Haziran:** Fable ücretsiz penceresi kapanır → keşif turu + FAZ 0'ın en ağır kalemleri (motor dönüşümü) ideal bu pencerede
- **~15 Haziran:** ölçüm/billing ayı başlangıcı; $100 Anthropic kredi maili geldi mi / claim edildi mi kontrol
- **VKN/KDV** işi bekliyor
- **THF→ASELS** gerçekleştiyse AEGIS sepet güncellemesi
- **Temmuz başı:** ilk postmortem penceresi (4 Haziran sinyalleri ~20 iş gününü doldurur) — defterin ilk gerçek hasadı
- **Arşiv doğrulaması:** son_aı dosyaları VPS'e gerçekten indi mi (S2'nin ilk işi)

---

## ÖNCELİK (güncel)
- **hep açık:** S1 öz-kontrol (+kalite saatleri) · S2 kullanım denetimi · S3 Pluton Dev özgürlük
- **şimdi:** KEŞİF TURU → FAZ 0 (keşif bulgularıyla güncellenerek)
- **sonra:** FAZ 1 → 2 → 3 → 4 → 5 *(LLM seçimi=14+16, çağrı haritası=16b Ege'nin sırasında öne çekilebilir — esneklik ilkesi)*
- **en son:** FAZ 6

*yaşayan plan — pusula, kelepçe değil. üç dosya birlikte: VİZYON v4 (ne olmalı) + bu PLAN v4 (nasıl olur) + keşif turunun SORUN ENVANTERİ (ne bozuk). her yeni fikir/sorun buraya işlenir.*
