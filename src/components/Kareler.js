/*
Kareler Talimaları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-kareler.gif

Bu bileşen, bir yandan "kare idlerinin" listesinin kaydını tutar,
ve şu anda aktif olan id yi tutar. Yani iki dilim kullanılacak!
Biri kareleri oluşturmak için kullanılır, diğeri ise id yi tutmak için,
böylece bileşen hangi karenin o anda aktif olduğunu bilir.

Herhangi bir noktada yalnızca bir kare aktif olabilir (ya da hiçbiri)

Aşaıdaki yorumları takip edin.
*/

import React, { useState } from 'react';



const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];



export default function Kareler() {

  const [kareler, setKareler] = useState(KareIdListesi);
  const [aktifKare, setAktifKare] = useState(null);

  const ClassAdiAl = id => {
    if (aktifKare === id)
      return "active";
    else
      return "";
  };

  const AktifEt = id => {
    if (aktifKare === id) {
      setAktifKare(null);
    }
    else {
      setAktifKare(id)
    }

  };

  return (
    <div className='widget-squares container'>
      <h2>Kareler</h2>
      <div className='squares'>
        {
          kareler.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${ClassAdiAl(id)}`}
              onClick={() => AktifEt(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
