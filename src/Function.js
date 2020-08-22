exports.jarakTempuh_Mobil = (waktuAwal, waktuSampai, kecepatan1) => {
  let percepatan = kecepatan1;
  let tempAwal = [];
  let tempAkhir = [];
  let idx = 0;
  let awal = "";
  let akhir = "";
  let jarakTempuh = 0;
  let selisih_waktu = 0;
  let newTime = 0;

  for (let i = 0; i < waktuAwal.length; i++) {
    awal += waktuAwal[i];
    akhir += waktuSampai[i];
    if (waktuAwal[i] === ":" || i >= waktuAwal.length - 1) {
      tempAwal[idx] = parseInt(awal);
      awal = "";
      tempAkhir[idx] = parseInt(akhir);
      akhir = "";
      idx++;
    }
  }
  let waktuAwal_detik = tempAwal[0] * 3600 + tempAwal[1] * 60 + tempAwal[2];
  let waktuSampai_detik =
    tempAkhir[0] * 3600 + tempAkhir[1] * 60 + tempAkhir[2];

  selisih_waktu = waktuSampai_detik - waktuAwal_detik;

  for (let i = 0; i <= selisih_waktu; i++) {
    if (i === 300) {
      newTime = i;
      percepatan += 2;
    } else if (i === newTime + 600) {
      newTime = i;
      percepatan += 1;
    }
  }
  jarakTempuh += percepatan * newTime;
  return jarakTempuh;
};
