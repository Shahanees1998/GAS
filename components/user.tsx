'use client'

import React, { useState, useRef } from 'react'
import { Dropdown } from 'react-bootstrap'
import Slider from 'react-slick';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Link from 'next/link';
export default function User() {
    const [region, setRegion] = useState('')
    const printRef = useRef<HTMLDivElement>(null);
    const [visible, setvisible] = useState(false)
    const handlePrint = () => {
        setvisible(true)
        const printContent = (printRef as any)?.current?.innerHTML;
        const printWindow = window.open('', '', 'width=800,height=600');
        (printWindow as any)?.document.write('<html><head><title>Print</title>');
        (printWindow as any)?.document.write('</head><body >');
        (printWindow as any)?.document.write(printContent);
        (printWindow as any)?.document.write('</body></html>');
        (printWindow as any)?.document.close();
        (printWindow as any)?.focus();
        (printWindow as any)?.print();
        (printWindow as any)?.close();
        setvisible(false)
    };
    const [data, setData] = useState([
        {
            REGIONE: { name: 'ABRUZZO', value: 'Ok' },
            TRASFERTA: 'NO',
            kWh_kW: '1294',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'BASILICATA', value: 'Ok' },
            TRASFERTA: 'NO',
            kWh_kW: '1414',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'CALABRIA', value: 'NO' },
            TRASFERTA: 'NO',
            kWh_kW: '1530',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'CAMPANIA', value: 'NO' },
            TRASFERTA: 'NO',
            kWh_kW: '1581',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'EMILIA ROMAGNA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1345',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'FRIULI VENEZIA GIULIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1282',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'LAZIO', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1476',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'LIGURIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1382',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'LOMBARDIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1341',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'MARCHE', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1390',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'MOLISE', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1433',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'PIEMONTE', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1392',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'PUGLIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1512',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'SAN MARINO', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1379',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'SARDEGNA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1524',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'SICILIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1519',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'TOSCANA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1334',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'TRENTINO ALTO ADIGE', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1236',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'UMBRIA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1412',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'VALLE D\'AOSTA', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1078',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        },
        {
            REGIONE: { name: 'VENETO', value: 'OK' },
            TRASFERTA: 'NO',
            kWh_kW: '1416',
            Denomin: `=+$'FOTOVOLTAICO+STORAGE'.$P$19`,
            kW: `=+VLOOKUP($R$3,$B$13:$C$18,2,0)`,
            Denomin_Cap: `=+$'FOTOVOLTAICO+STORAGE'.$P$21`,
            kWh: `=+VLOOKUP($T$3,$O$26:$P$30,2,0)`,
            kWh_anno: `=+Q3*S3`,
            kWh_kW_Nicola: `=Q3*90%`
        }
    ]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 2400,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
            }
        },
        ]
    };
    const potenza = [{ key: 'kWp_3', value: 3.01 }, { key: 'kWp_43', value: 4.3 }, { key: 'kWp_6', value: 6.02 }, { key: 'kWp_6_TRIFASE', value: 6.02 }, { key: 'kWp_81_TRIFASE', value: 8.17 }, { key: 'kWp_103_TRIFASE', value: 10.32 }]
    const [monoFace, setMonoFace] = useState('')
    const [F1, setF1] = useState(1000)
    const [F2, setF2] = useState(1000)
    const [F3, setF3] = useState(1000)
    const [Valore_Inserito, setValore] = useState(0.4)
    const [walbox, setWalbox] = useState('')
    const [fotovoltaico, setFotovoltaico] = useState('')
    const [FINANZIAMENTO, setFINANZIAMENTO] = useState('')
    const FINANZIAMENTOList = ['-', '25%', '50%']
    const Capacità_batteria = 0

    const regionList = [
        'ABRUZZO',
        'BASILICATA',
        'CALABRIA',
        'CAMPANIA',
        'EMILIA ROMAGNA',
        'FRIULI VENEZIA GIULIA',
        'LAZIO',
        'LIGURIA',
        'LOMBARDIA',
        'MARCHE',
        'MOLISE',
        'PIEMONTE',
        'PUGLIA',
        'SAN MARINO',
        'SARDEGNA',
        'SICILIA',
        'TOSCANA',
        'TRENTINO ALTO ADIGE',
        'UMBRIA',
        "VALLE D'AOSTA",
        'VENETO'
    ]
    const lookup1 = [
        { L11: "kWp_3kWh_5", L22: 12990.00, L33: 12390.00 },
        { L11: "kWp_43kWh_5", L22: 14990.00, L33: 14290.00 },
        { L11: "kWp_43kWh_10", L22: 17490.00, L33: 16590.00 },
        { L11: "kWp_6kWh_10", L22: 19900.00, L33: 18900.00 },
        { L11: "kWp_6kWh_15", L22: 22900.00, L33: 21750.00 },
        { L11: "kWp_6_TRIFASEkWh_10", L22: 21900.00, L33: 20800.00 },
        { L11: "kWp_6_TRIFASEkWh_15", L22: 24900.00, L33: 23650.00 },
        { L11: "kWp_81_TRIFASEkWh_10", L22: 25900.00, L33: 24600.00 },
        { L11: "kWp_81_TRIFASEkWh_15", L22: 28900.00, L33: 27490.00 },
        { L11: "kWp_81_TRIFASEkWh_20", L22: 31900.00, L33: 30300.00 },
        { L11: "kWp_103_TRIFASEkWh_10", L22: 29800.00, L33: 28300.00 },
        { L11: "kWp_103_TRIFASEkWh_15", L22: 32800.00, L33: 31190.00 },
        { L11: `kWp_103_TRIFASEkWh_20`, L22: 35800.00, L33: 33900.00 }
    ]

    const data30 = [
        { N: 'NO', O: 0.00, P: '-' },
        { N: '7,4 kW monofase', O: 1500.00, P: '220/230 monofase' },
        { N: '22 kW TRIFASE', O: 2400.00, P: '380/400 TRIFASE' }
    ]
    const [boletta, setBoletta] = useState('')
    const bolettaList = ['-', '220/230 monofase', '380/400 TRIFASE']
    const fotovoltaicoList0 = ['-', 'kWp_3', 'kWp_43', 'kWp_6', 'kWp_6_TRIFASE', 'kWp_81_TRIFASE', 'kWp_103_TRIFASE']
    const fotovoltaicoList1 = ['kWp_3', 'kWp_43', 'kWp_6']
    const fotovoltaicoList2 = ['kWp_6_TRIFASE', 'kWp_81_TRIFASE', 'kWp_103_TRIFASE']
    const fotovoltaicoList = boletta == bolettaList[0] ? fotovoltaicoList0 : boletta == bolettaList[1] ? fotovoltaicoList1 : fotovoltaicoList2
    const [accumulo, setAccumulo] = useState('')
    const accumuloList1 = ['kWh_5']
    const accumuloList2 = ['kWh_5', 'kWh_10']
    const accumuloList3 = ['kWh_10', 'kWh_15']
    const accumuloList4 = ['kWh_10', 'kWh_15', 'kWh_20']
    const accumuloList0 = ['-', 'kWh_5', 'kWh_10', 'kWh_15', 'kWh_20']
    const accumuloList = fotovoltaico == 'kWp_3' ? accumuloList1 : fotovoltaico == 'kWp_43' ? accumuloList2 : (fotovoltaico == 'kWp_6' || fotovoltaico == 'kWp_6_TRIFASE') ? accumuloList3 : (fotovoltaico == 'kWp_81_TRIFASE' || fotovoltaico == 'kWp_103_TRIFASE') ? accumuloList4 : accumuloList0

    const E14 = `${fotovoltaico}${accumulo}`
    const F14 = lookup1?.find((item) => { return item?.L11 == E14 })?.L22
    const E16 = walbox
    const F16 = data30?.find((item: any) => { return item.N == E16 })?.O
    const G14 = F14 == null ? 'INSERIRE VALORE CORRETTO' : F14

    const walboxList = ['NO', '7,4 kW monofase', '22 kW TRIFASE']
    const galleryList = [
        "/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg", "/images/gallery-4.jpg", "/images/gallery-5.jpg", "/images/gallery-6.jpg"
    ]
    const [batteria_auto, setbatteria] = useState(0)
    const data_list = [
        { FALDE: '', M2: '-' },
        { FALDE: 'kWp_3kWh_5', M2: 16.40 },
        { FALDE: 'kWp_43kWh_5', M2: 21.48 },
        { FALDE: 'kWp_43kWh_10', M2: 21.48 },
        { FALDE: 'kWp_6kWh_10', M2: 30.07 },
        { FALDE: 'kWp_6kWh_15', M2: 30.07 },
        { FALDE: 'kWp_6_TRIFASEkWh_10', M2: 30.07 },
        { FALDE: 'kWp_6_TRIFASEkWh_15', M2: 30.07 },
        { FALDE: 'kWp_81_TRIFASEkWh_10', M2: 40.81 },
        { FALDE: 'kWp_81_TRIFASEkWh_15', M2: 40.81 },
        { FALDE: 'kWp_81_TRIFASEkWh_20', M2: 40.81 },
        { FALDE: 'kWp_103_TRIFASEkWh_10', M2: 51.55 },
        { FALDE: 'kWp_103_TRIFASEkWh_15', M2: 51.55 },
        { FALDE: 'kWp_103_TRIFASEkWh_20', M2: 51.55 }
    ]
    const data_list2 = [
        { PIANO: 'kWp_3kWh_5', M2: 27.88 },
        { PIANO: 'kWp_43kWh_5', M2: 36.52 },
        { PIANO: 'kWp_43kWh_10', M2: 36.52 },
        { PIANO: 'kWp_6kWh_10', M2: 51.12 },
        { PIANO: 'kWp_6kWh_15', M2: 51.12 },
        { PIANO: 'kWp_6_TRIFASEkWh_10', M2: 51.12 },
        { PIANO: 'kWp_6_TRIFASEkWh_15', M2: 51.12 },
        { PIANO: 'kWp_81_TRIFASEkWh_10', M2: 69.38 },
        { PIANO: 'kWp_81_TRIFASEkWh_15', M2: 69.38 },
        { PIANO: 'kWp_81_TRIFASEkWh_20', M2: 69.38 },
        { PIANO: 'kWp_103_TRIFASEkWh_10', M2: 87.64 },
        { PIANO: 'kWp_103_TRIFASEkWh_15', M2: 87.64 },
        { PIANO: 'kWp_103_TRIFASEkWh_20', M2: 87.64 }
    ]
    const O26P30 = [
        { key: '-', value: 0 },
        { key: 'kWh_5', value: 5 },
        { key: 'kWh_10', value: 10 },
        { key: 'kWh_15', value: 15 },
        { key: 'kWh_20', value: 20 }
    ]

    const F18 = (F16 != null && F14 != null && !isNaN(F16) && !isNaN(F14)) ? (F16 + F14) : '-'
    const G18 = (F18 != null) ? F18 : 'INSERIRE VALORE CORRETTO'
    const Acconto = [
        { name: '-', value: 0 },
        { name: '25%', value: (G18 as any) * 0.25 },
        { name: '50%', value: (G18 as any) * 0.50 }
    ]

    const data20 = [{ N: 'NO', O: '0.00', P: ' -' }, { N: '7,4 kW monofase', O: '1,500.00', P: ' 220/230 monofase', Q: '7.4' }, { N: '22 kW TRIFASE', O: '2,400.00', P: ' 380/400 TRIFASE', Q: '22' }]
    const H14 = (F14 ?? 1) * 0.50
    const H16 = (F16 ?? 1) > 1500 ? (300 + (F16 ?? 1) - 1500) : (F16 ?? 1) * 0.20


    const N40 = `${fotovoltaico}${accumulo}`
    const O40 = data_list?.find((item) => { return item.FALDE == N40 })?.M2

    const O43 = data_list2?.find((item) => { return item.PIANO == N40 })?.M2
    const H18 = (H16 != null && H14 != null && !isNaN(H16) && !isNaN(H14)) ? (H16 + H14) : '-'
    const [termine_del_finanziamento, settermine_del_finanziamento] = useState(50)
    const investimentoval = O26P30?.find((item) => { return item?.key == accumulo })?.value ?? 1

    const [O50, setO50] = useState(120)
    const Chiavi = data?.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : fotovoltaico == '0' ? 0 : ((F16 != null && F14 != null) ? (F16 + F14) : '-')

    const calculateMonthlyPayment = (annualInterestRate: any, totalPayments: any, principalAmount: any): any => {
        const monthlyInterestRate = annualInterestRate / 12;
        const numerator = principalAmount * monthlyInterestRate;
        const denominator = 1 - Math.pow(1 + monthlyInterestRate, -totalPayments);
        const monthlyPayment = numerator / denominator;
        return monthlyPayment;
    }
    const D24 = 0.085
    const annualInterestRate = D24
    const B24 = O50
    const totalPayments = B24
    const accontoValue = Acconto?.find((item) => { return item?.name == FINANZIAMENTO })?.value ?? 0
    const E24 = Chiavi as number - accontoValue as any
    const principalAmount = E24
    const G24 = calculateMonthlyPayment(annualInterestRate, totalPayments, principalAmount)
    const produ = parseFloat(data.find(item => { return item.REGIONE.name == region })?.kWh_kW as string) * (potenza?.find((item) => { return item?.key == fotovoltaico })?.value ?? 1)
    const investimento = investimentoval == 0 ? (produ * Valore_Inserito * 0.65 * (-25) * 0.8).toFixed(2) : investimentoval == 5 ? (produ * Valore_Inserito * 0.8 * (-25) * 0.8).toFixed(2) : investimentoval == 10 ? (produ * Valore_Inserito * 0.85 * (-25) * 0.8).toFixed(2) : investimentoval == 15 ? (produ * Valore_Inserito * 0.9 * (-25) * 0.8).toFixed(2) : (produ * Valore_Inserito * 0.95 * (-25) * 0.8).toFixed(2)
    const beneficio = ((investimento as any) / 25).toFixed(2)
    const beneficio_mencil = ((beneficio as any) / 12) - (H14 / 120)
    const indicative = data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : Chiavi == 0 ? 0 : G24
    const ritorno = -(H14 / (beneficio as any)).toFixed(2)
    return (
        <div id={"pageToPrint"} style={{ position: 'relative' }}>
            <body data-spy="scroll" data-target=".navbar" data-offset="51">
                <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="display-4 text-white text-uppercase m-0">EGW</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="#home" className="nav-item nav-link active">HOME</a>
                            <a href="#about" className="nav-item nav-link">Fotovoltaico + Storage</a>
                        </div>
                        <a href="index.html" className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block">
                            <img src={"/images/logo.png"} />
                        </a>
                        <div className="navbar-nav mr-auto py-0">
                            <a href="#team" className="nav-item nav-link">Finanziamenti</a>
                            <a href="#faqs" className="nav-item nav-link">FAQs</a>
                        </div>
                        <div className="navbar-nav mr-auto py-0">
                            <button onClick={() => handlePrint()} className="nav-item nav-link">Print</button>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid p-0 mb-5 pb-5" id="home">
                    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src="/images/carousel-1.jpg" style={{ objectFit: 'cover' }} />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Solar Energy</h4>
                                        <h3 className="display-2 font-secondary text-white mb-4">Innovative Solar Solution For Home</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src="/images/carousel-2.jpg" style={{ objectFit: 'cover' }} />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: '900px' }}>
                                        <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Solar Energy</h4>
                                        <h3 className="display-2 font-secondary text-white mb-4">Let The Sun Work For Your Home</h3>
                                        <a className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll" href="#contact">Get A Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                                <span className="carousel-control-prev-icon mt-3"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                            <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                                <span className="carousel-control-next-icon mt-3"></span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container-fluid " id="about">
                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>Fotovoltaico Storage</h6>
                                <h1 className="display-4 mb-3"><span className="text-primary">SCEGLI L’AUTONOMIA </span> ENERGETICA!</h1>
                            </div>
                            <div className="col-lg-10">
                                <label>{`Inserire la Regione d'installazione`}</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {region != '' ? region : 'Select Region'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {regionList.map((item, index) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => setRegion(item)}>{item}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-2">
                                {region != '' &&
                                    <div style={{ marginTop: '40px' }}>{data?.find((item: any) => { return item.REGIONE.name == region })?.REGIONE.value ?? 'select region'}</div>
                                }
                            </div>

                            <div className="col-lg-12 mt-3">
                                <label>Consumo annuo cliente [kWh]</label>
                            </div>
                            <div className="col-lg-4 mt-1">
                                <div className="d-flex justify-content-between">
                                    <label className="color">F1</label>
                                    <label className="color">{F1 as any == 0 ? '-' : `${((F1 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={F1} onChange={(e) => setF1(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-">
                                <div className="d-flex justify-content-between">
                                    <label className="color">F2</label>
                                    <label className="color">{F2 as any == 0 ? '-' : `${((F2 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={F2} onChange={(e) => setF2(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-1">
                                <div className="d-flex justify-content-between">
                                    <label className="color">F3</label>
                                    <label className="color">{F3 as any == 0 ? '-' : `${((F3 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={JSON.stringify(F3)} onChange={(e) => setF3(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <div className="bg-web">
                                    Consumo annuo totale (kWh) {(F1 + F2 + F3).toFixed(2)}
                                </div>
                            </div>
                            <div className="col-lg-8 mt-4">
                                <label>Prezzo medio bolletta luce IVA (€/kWh)</label>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Valore_Inserito} onChange={(e) => setValore(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <div className="d-flex justify-content-between">
                                    <label style={{ marginTop: '60px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : Valore_Inserito as any === 0 ? 'DA INSERIRE' : 'valore inserito'}</label>
                                </div>
                            </div>

                            <div className="col-lg-6 row mt-2" style={{ position: 'relative' }}>
                                <label>Tensione riportata in bolletta [V]</label>
                                <div className='col-lg-8'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {boletta != '' ? boletta : 'Select boletta'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {bolettaList.map((item, index) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => setBoletta(item)}>{item}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-lg-4'>
                                    <label style={{ marginTop: '10px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : boletta as any == '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                </div>
                                <label style={{ color: 'red', position: 'absolute', top: 90 }}>{boletta == '220/230 monofase' ? 'seleziona FV MAX KWP_6' : ``}</label>

                            </div>
                            <div className="col-lg-6 row mt-2">
                                <label>{`Potenza dell impianto fotovoltaico`}</label>
                                <div className='col-lg-8'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {fotovoltaico != '' ? fotovoltaico : 'Select fotovoltaico'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {fotovoltaicoList.map((item, index) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => setFotovoltaico(item)}>{item}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-lg-4'>
                                    <label style={{ marginTop: '10px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : monoFace === '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                </div>
                            </div>

                            <div className="col-lg-12" style={{ marginTop: '70px' }}>
                                <div className="bg-web">
                                    Produzione annua (kWh) {produ.toFixed(2)}
                                </div>
                            </div>

                            <div className="col-lg-12 row mt-4">
                                <div className='col-lg-8'>
                                    <label>Capacità batteria accumulo</label>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {accumulo != '' ? accumulo : 'Select accumulo'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {accumuloList.map((item, index) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => setAccumulo(item)}>{item}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-lg-4'>
                                    <label style={{ marginTop: '50px' }} className="color">{G14 == 'INSERIRE VALORE CORRETTO' ? 'INSERIRE VALORE CORRETTO' : data?.find((item: any) => { return item.REGIONE.name == region })?.REGIONE.value == 'non disponibile' ? '-' : accumulo == '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                </div>
                            </div>

                            <div className="col-lg-6 row mt-2" style={{ position: 'relative' }}>
                                <label>Aggiungere una Wallbox?</label>

                                <div className='col-lg-8'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {walbox != '' ? walbox : 'Select walbox'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {walboxList.map((item, index) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => setWalbox(item)}>{item}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-lg-4'>
                                    <label style={{ marginTop: '10px' }} className="color">{walbox === 'NO' ? '-' : 'valore inserito'}</label>
                                </div>
                                <label style={{ color: 'red', position: 'absolute', top: 90 }}>{boletta == '"380/400 TRIFASEfase' ? 'Wallbox SOLO 22 kW' : boletta == '220/230 monofase' ? 'Wallbox SOLO 7,4 kW' : ''}</label>
                            </div>
                            <div className="col-lg-6 row" style={{ marginTop: '5%' }}>
                                <label>Capacità batteria auto [kWh]</label>
                                <div className="form-group ">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={batteria_auto} onChange={(e) => setbatteria(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                                <div className='col-lg-4'>
                                    <label style={{ marginTop: '10px' }} className="color">{batteria_auto == 0 ? '-' : 'valore inserito'}</label>
                                </div>
                            </div>

                            <div>{Capacità_batteria === 0 ? '-' : 'valore inserito'}</div>
                            <div className="col-lg-12 mt-3">
                                <div className="bg-web-blue">
                                    Tempo di ricarica stimato (h) {data20?.find((item) => { return item?.N == walbox })?.Q != null ? (batteria_auto / (data20?.find((item) => { return item?.N == walbox })?.Q as any)).toFixed(2) : 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="total">
                                <h2>{`Totale "Chiavi in mano" iva 10% inclusa`}</h2>
                                <h2 className="text-white">{(Chiavi == 0 || Chiavi == '-') ? Chiavi : `${Chiavi.toLocaleString()}€`}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="total bg-dark">
                                <h2 className="text-white">{H18.toLocaleString()}€</h2>
                                <p className="text-white">FVT con pratica detrazione fiscale 50% in 10 anni. Wallbox bonus 80% (spesa max 1.500€ privati / 8.000€ condomini).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5" id="service">
                    <div className="container py-5">
                        <div className="section-title position-relative text-center">
                            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>See</h6>
                            <h1 className="font-secondary display-4">Our Partners</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-3 d-flex align-items-center justify-content-center">
                                <div className="product-item mb-2">
                                    <img src="/images/partner-logo1.png" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3 d-flex align-items-center justify-content-center">
                                <div className="product-item mb-2">
                                    <img src="/images/partner-logo2.png" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3 d-flex align-items-center justify-content-center">
                                <div className="product-item mb-2">
                                    <img src="/images/partner-logo3.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gallery padding mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-item mb-2">
                                    <div className="product-img">
                                        <img className="img-fluid img-contain w-100 set-height" src="/images/product-3.jpg" alt="" />
                                        <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            <i className="fa fa-2x fa-plus text-white"></i>
                                        </a>
                                    </div>
                                    <div className="bg-secondary text-center p-4" style={{ height: '300px' }}>
                                        <h3 className="m-0">{`RITORNO SULL INVESTIMENTO`}</h3>
                                        <p className="pt-3">{`Numero di anni per ritornare dell investimento, pagato con bonifico parlante. Per semplicità, si considera la detrazione fiscale 50% attualizzata al momento del pagamento stesso.`}</p>
                                        <p className='pt-3' style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>{Math.floor(ritorno).toLocaleString('en-US')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="product-item mb-2">
                                            <div className="product-img">
                                                <img className="img-fluid img-contain w-100" src="/images/product-2.jpg" alt="" />
                                                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                                    <i className="fa fa-2x fa-plus text-white"></i>

                                                </a>
                                            </div>
                                            <div className="bg-secondary text-center p-4" style={{ height: '300px' }}>
                                                <h3 className="m-0">INVESTIMENTO</h3>
                                                <p className="pt-3">{`BENEFICIO INVESTIMENTO in 25 anni (compreso decadimento all 80%).`}</p>
                                                <p className='pt-3' style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>{Math.floor(parseInt(investimento)).toLocaleString('en-US')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="product-item mb-2">
                                            <div className="product-img">
                                                <img className="img-fluid img-contain w-100" src="/images/product-1.jpg" alt="" />
                                                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                                    <i className="fa fa-2x fa-plus text-white"></i>
                                                </a>
                                            </div>
                                            <div className="bg-secondary text-center p-4" style={{ height: '300px' }}>
                                                <h3 className="m-0">BENEFICIO</h3>
                                                <p className="pt-3">{`BENEFICIO INVESTIMENTO annuo (compreso decadimento all 80%).`}</p>
                                                <p className='pt-3' style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>{Math.floor(parseInt(beneficio)).toLocaleString('en-US')}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <h3 className="m-0">PROIEZIONE FINANZIAMENTO</h3>

                            <div className="col-lg-12 p-0 mt-3">
                                <label>Anticipo</label>
                                <label style={{ fontWeight: '500', fontSize: '18px', marginLeft: '10px' }}>( {accontoValue} € )</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {FINANZIAMENTO != '' ? FINANZIAMENTO : 'Select FINANZIAMENTO'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {FINANZIAMENTOList.map((item, index) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => setFINANZIAMENTO(item)}>{item}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                                <label>Età richiedente:</label>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={termine_del_finanziamento} onChange={(e) => settermine_del_finanziamento(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                                <label>Max 78 anni (al termine del finanziamento):</label>
                                <div className="form-group">
                                    <input type="number" disabled={true} style={{ color: (termine_del_finanziamento + (O50 / 12)) > 78 ? 'red' : '' }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={termine_del_finanziamento + (O50 / 12)} />
                                </div>
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                                <label>N° mesi finanziamento (max 120):</label>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={O50} onChange={(e) => { parseInt(e.target.value) < 121 && setO50(e.target.value.length > 0 ? parseFloat(e.target.value) : 0) }} />
                                </div>
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                                <label>Rata mensile (indicativa):</label>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={indicative.toFixed(2)} />
                                </div>
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                                <label>Rata con SmartHome:</label>
                                <div className="form-group">
                                    <input type="number" className="form-control green" id="exampleInputEmail1" aria-describedby="emailHelp" value={(indicative - 44).toFixed(2)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="product-item mb-2">
                                <div className="product-img">
                                    <img className="img-fluid" src="/images/product-3.jpg" alt="" />
                                    <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="bg-smoke text-center p-4">
                                    <h3 className="m-0">PROIEZIONE BENEFICIO MENSILE</h3>
                                    <p className="pt-3">Beneficio medio mensile generato da: Risparmio in bolletta; Recupero della detrazione fiscale del 50%; Contributo vendita energia (GSE).</p>
                                    <label style={{ width: '100%', textAlign: 'center' }}>{beneficio_mencil?.toFixed(2)}</label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="project" style={{ padding: '120px 0px' }}>
                    <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>Project</h6>
                        <h1 className="font-secondary display-4">Project Photo Gallery</h1>
                    </div>
                    {galleryList.length > 0 &&
                        <div style={{ width: '100%', height: "100%" }}>
                            <Slider {...settings}>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-1.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-1.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-2.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-2.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-3.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-3.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-4.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-4.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-5.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-5.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <img className="img-fluid" src="/images/gallery-6.jpg" alt="" />
                                    <a className="btn btn-primary" href="img/gallery-6.jpg" data-lightbox="gallery">
                                        <i className="fa fa-2x fa-plus text-white"></i>
                                    </a>
                                </div>
                            </Slider>
                        </div>}
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="font-secondary display-5">{`Verifics il rendimento dell impianto all indirizzo esatto di installazione`}</h3>
                                <Link href={"https://re.jrc.ec.europa.eu/pvg_tools/it/"}> <img className="icon" src="/images/award.png" /></Link>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="font-secondary display-5">{`Verifica dimensioni tetto dell immobile`}</h3>
                                <Link href="https://www.google.com/maps/@45.59135,10.243048,2878m/data=!3m1!1e3?hl=it&entry=ttu"><img className="map" src="/images/map.jpg" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="blue">
                                    <h2>Con SMARTHOME DUAL sconto di:</h2><br />
                                    <h4>-44€/mese per i primi 12 mesi, poi</h4> <br />
                                    <h4>{`-26,40€/mese fino a completa restituzione dell importo (iva 10%)`}</h4>

                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="whitearea">
                                    <h3>QUANTO SPAZIO SERVE PER INSTALLARE IL FOTOVOLTAICO SELEZIONATO?</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="pt-3">TETTO A FALDE (m2)</label>
                                            <div className="grey-box">{O40}</div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="pt-3">TETTO PIANO (m2)</label>
                                            <div className="grey-box">{O43}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



























































                            <div className="container-fluid py-5" id="team">
                                <div className="container py-5">
                                    <div className="section-title position-relative text-center">
                                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>See Our</h6>
                                        <h1 className="font-secondary display-4">Findomestic - Documenti e requisiti per finanziamenti												                </h1>
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <div className="freez-bg">
                                                <div className="freez-white-bg">
                                                    (1) CITTADINO ITALIANO
                                                </div>
                                                <p className="paragraph">Fronte/retro leggibile del documento di riconoscimento in corso di validità (Carta d’identità, Patente, Passaporto).
                                                </p>
                                                <p className="paragraph">Fronte/retro della tessera sanitaria in corso di validità.
                                                </p>
                                                <h4 className="paragraph">LAVORATORI DIPENDENTI
                                                </h4>
                                                <p className="paragraph">{`"Ultima busta paga (Il reddito da inserire è il
                                                    netto “ordinario”, escluse quindi tutte le voci
                                                    Straordinarie come tredicesima, arretrati,
                                                    ecc.)."`}
                                                </p>
                                                <h4 className="paragraph">PENSIONATI (uno o più documenti in possesso del cliente)
                                                </h4>
                                                <p className="paragraph">- Ultimo cedolino della pensione; <br />
                                                    - Certificato di pensione (modello Obis); <br />
                                                    - Modello CU (dividendo per 13 il reddito imponibile sottratto delle ritenute IRPEF e dell’addizionale regionale e comunale); <br />
                                                    - IRPEF; <br />
                                                    - Modello UNICO; <br />
                                                    - Modello 730; <br />
                                                    - Prospetto pensionistico con validità temporale (in presenza di pensionato che non abbia ancora ricevuto il primo cedolino).
                                                </p>
                                                <h4 className="paragraph">LAVORATORI AUTONOMI
                                                </h4>
                                                <p className="paragraph">Ultimo Modello Unico (il reddito si ricava dall’ultimo Modello Unico. L’importo da considerare è dato dal reddito imponibile meno l’imposta netta, diviso 12).

                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="freez-bg">
                                                <div className="freez-white-bg">
                                                    (2) CITTADINO STRANIERO O COMUNITARIO

                                                </div>
                                                <p className="paragraph">Oltre alla documentazione di cui sopra, per i cittadini stranieri o comunitari, occorre recuperare:
                                                </p>
                                                <p className="paragraph">Utenza intestata al cliente, recante la dicitura «uso residente» o simile, che accerti l’indirizzo di residenza che viene inserito in telematica, non più vecchia di 3 mesi OPPURE
                                                </p>
                                                <p className="paragraph">Certificato di Residenza non più vecchio di 3 mesi oppure libretto di circolazione, o tessera elettorale; contratto di Locazione registrato; contratto di Acquisto abitazione.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="freez-bg">
                                                <div className="freez-white-bg">
                                                    (3) CITTADINO STRANIERO EXTRACOMUNITARIO


                                                </div>
                                                <p className="paragraph">Oltre alla documentazione di cui sopra, per i cittadini stranieri extracomunitari, occorre recuperare:
                                                </p>
                                                <p className="paragraph">Utenza intestata al cliente, recante la dicitura «uso residente» o simile, che accerti l’indirizzo di residenza che viene inserito in telematica, non più vecchia di 3 mesi OPPURE
                                                </p>
                                                <p className="paragraph">Certificato di Residenza non più vecchio di 3 mesi oppure libretto di circolazione, o tessera elettorale; contratto di Locazione registrato; contratto di Acquisto abitazione.
                                                </p>
                                                <p className="paragraph">Carta di Soggiorno/Carta di Identità rilasciata dal Ministero degli Affari Esteri solo se dipendenti di Enti o Rappresentanze Internazionali.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid py-5" id="faqs">
                                <div className="container py-5">
                                    <div className="section-title position-relative text-center">
                                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>FAQs</h6>
                                        <h1 className="display-4">You Should Know</h1>
                                    </div>
                                    <Accordion activeIndex={0}>
                                        <AccordionTab header="(1) Perché acquistare un impianto fotovoltaico?">
                                            <div>
                                                <p>Acquistare un impianto fotovoltaico offre una serie di vantaggi significativi, che possono essere riassunti nei seguenti punti:
                                                </p>
                                                <p>
                                                    ° Rispetto per l ambiente: Il fotovoltaico consente di produrre energia pulita, riducendo l inquinamento e le emissioni di gas serra associate alla generazione di energia da fonti tradizionali come il carbone o il gas naturale.
                                                </p>
                                                <p>
                                                    ° Convenienza economica: Grazie all autoconsumo dell energia prodotta, alla possibilità di vendere l energia in eccesso alla rete e la detrazione fiscale del 50%, l impianto fotovoltaico può portare a significativi risparmi sui costi dell energia elettrica nel corso degli anni, offrendo un ritorno sull investimento significativo.
                                                </p>
                                                <p>
                                                    ° Affidabilità e durabilità: Gli impianti fotovoltaici sono progettati per durare decenni con una manutenzione minima, offrendo una fonte stabile di energia nel lungo periodo senza la necessità di interventi frequenti o costosi.
                                                </p>
                                                <p>
                                                    ° Indipendenza energetica: La produzione di energia solare consente di ridurre la dipendenza dalle fonti di energia tradizionali e di autoprodurre l energia che serve ai nostri bisogni. Inoltre, l integrazione con un sistemi di accumulo consente di immagazzinare l energia prodotta per l utilizzo in momenti in cui il sole non è disponibile, aumentando ulteriormente l indipendenza energetica dell utente.
                                                </p>
                                                <p>
                                                    {` ° Valorizzazione dell immobile: Un impianto fotovoltaico installato su un'abitazione può aumentarne il valore di mercato, rendendola più attrattiva per potenziali acquirenti sensibili alla sostenibilità e desiderosi di ridurre i costi energetici a lungo termine.				`}
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header="(2) Posso staccarmi dalla rete elettrica nazionale (E-Distribuzione, Areti o simili)?">
                                            <div>
                                                <p>Un impianto fotovoltaico con sistema di accumulo adeguatamente dimensionato può coprire una parte significativa del tuo consumo energetico giornaliero, consentendoti di ridurre o eliminare completamente il tuo prelievo di energia dalla rete. Tuttavia, scollegarsi completamente dalla rete elettrica è attualmente sconsigliabile, poiché una connessione affidabile alla rete garantisce la continuità di alimentazione dei tuoi carichi elettrici.
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={`(3) L'energia non consumata che viene ceduta alla rete, viene remunerata? `}>
                                            <div>
                                                <p>Sì, l energia non consumata che viene ceduta alla rete può essere remunerata attraverso il servizio di scambio sul posto (SSD). Lo scambio sul posto è un contratto stipulato dai titolari di impianti di produzione di energia con il Gestore dei Servizi Elettrici (GSE). Si tratta di una forma di autoconsumo che consente di compensare l energia elettrica prodotta e immessa in rete in un certo momento con quella prelevata e consumata in un momento diverso. In cambio di questa possibilità, l utente riceve una compensazione economica.
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={`(4) Quali benefici fiscali ci sono se installo un impianto fotovoltaico?
`}>
                                            <div>
                                                <p>Per tutto il 2024, È possibile beneficiare della detrazione fiscale del 50% delle spese sostenute entro il limite di 96mila euro di spesa. La proroga è valida sia per i lavori sulle singole unità immobiliari che per la ristrutturazione delle parti comuni degli edifici condominiali. Tutte le spese sostenute per la realizzazione dell impianto dovranno essere corrisposte con il cosiddetto “bonifico parlante”.
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={`  (5) Il sistema di accumulo (batterie) si può installare in un secondo momento?`}>
                                            <div >
                                                <p>Sì, è possibile installare un sistema di accumulo in un secondo momento, purché l installazione avvenga entro il 31 dicembre 2024 per poter beneficiare della detrazione fiscale del 50%, la stessa applicata per l impianto fotovoltaico. Tuttavia, si consiglia vivamente di installare il sistema di accumulo in concomitanza alla realizzazione dell impianto fotovoltaico. Accumulare energia e renderla disponibile nei momenti in cui l impianto fotovoltaico non produce consente di massimizzare i benefici complessivi, riducendo il tempo necessario per il ritorno dell investimento.
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={` (6) Come faccio a sapere se il mio impianto funziona?`}>
                                            <div>
                                                <p>{`Per mezzo di una connessione internet è possibile monitorare la produzione dell impianto fotovoltaico e rilevare eventuali anomalie tramite un sistema di monitoraggio da remoto. In alcuni casi, è possibile monitorare anche i consumi elettrici domestici. Questo sistema fornisce agli utenti un'analisi dettagliata delle prestazioni dell impianto, consentendo di intervenire tempestivamente in caso di problemi e ottimizzando l efficienza complessiva del sistema.	`}
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={`(7) È necessaria la manutenzione dell’impianto?`}>
                                            <div>
                                                <p>La manutenzione dell impianto non è obbligatoria ma è vivamente consigliata per assicurare il funzionamento ottimale dell impianto fotovoltaico. Si suggerisce di effettuare controlli periodici, almeno annualmente, per monitorare lo stato dell impianto e intervenire prontamente in caso di necessità.
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header={`(8) Può un proprietario di un appartamento di un condominio installare un impianto fotovoltaico?`}>
                                            <div>
                                                <p>{`Sì, informando preventivamente l’amministratore di condominio. Tuttavia, oggi grazie al gruppo di autoconsumo collettivo e all incentivo erogato dal GSE, è possibile installare un impianto condominiale e utilizzare l energia prodotta dall impianto non solo per coprire il fabbisogno energetico condominale, ma anche da tutti i condomini che partecipano al gruppo di autoconsumo collettivo "GAUC". l energia prodotta dall imianto viene utilizzata "virtualmente" da tutti i partecipanti al GAUC utilizzando la rete del distributore.  `}
                                                </p>
                                            </div>
                                        </AccordionTab>
                                        <AccordionTab header="(9) I prezzi che vedo sul vostro configuratore cosa comprendono?">
                                            <p>{`I prezzi indicati nel configuratore comprendono un'installazione "Standard chiavi in mano" ed includono IVA. Inoltre, garantiamo un'assistenza attiva alla redazione di tutte le pratiche necessarie alla messa in produzione dell'impianto: Pratica di connessione alla rete elettrica, Pratica ENEA per certificare l'intervento di efficientamento, Convenzione di Scambio sul posto con il Gestore dei Servizi Elettrici (GSE). Restano esclusi gli oneri richiesti dal distributore ai fini dell'allaccio ed eventuali oneri richiesti da Enti/amministrazioni locali.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(10) Che tipo di pannelli e batterie installate?">
                                            <p>{`Tutti i componenti che costituiscono l'impianto fotovoltaico sono di primarie marche, i moduli fotovoltaici ad alta efficienza di conversione garantiscono alte prestazioni performance garantite fino al 25esimo anno di vita ed oltre. Gli inverter e le batterie sono forniti da aziende leader del settore e garantiscono, anche in questo caso, alte prestazioni e perdite ridotte al fine di massimizzare i benefici.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(11) Una volta sottoscritto il contratto con voi, cosa devo fare?">
                                            <p>{`Nulla! Ci occupiamo noi di tutti gli adempimenti necessari, compresa la progettazione, la fornitura, l'installazione e le pratiche di connessione. Resta a carico del cliente solo il pagamento degli oneri di connessione e eventuali tasse richieste dalle autorità locali. Siamo qui per rendere il processo il più semplice possibile per te.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(12) Quanti giorni devo attendere dopo il collaudo per avere l'impianto fotovoltaico funzionante?">
                                            <p>{`Una volta completati i lavori di installazione e superato il collaudo tecnico, l'impianto è pronto per iniziare a produrre energia. Tuttavia, occorre attendere la conclusione del processo di connessione e, se necessario, l'esecuzione dei lavori da parte del distributore per stabilire la connessione effettiva. A seconda della complessità dei lavori, il gestore di rete ha fino a 90 giorni lavorativi per completare questa fase. In media, per gli impianti di questa tipologia, il tempo di connessione e avvio della produzione è di circa 30 giorni lavorativi.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(13) Dove posso smaltire i Moduli fotovoltaici e gli altri componenti dell'impianto a fine ciclo di vita e quanto mi costa?">
                                            <p>{`I moduli fotovoltaici, insieme agli altri componenti dell'impianto come l'inverter e le batterie, rientrano nella categoria dei Rifiuti da Apparecchiature Elettriche ed Elettroniche (RAEE). Lo smaltimento di tali dispositivi avviene attraverso centri di raccolta autorizzati, dove vengono gestiti in conformità alle normative vigenti. È importante sottolineare che questo servizio è già incluso nell'offerta di acquisto dei prodotti stessi, garantendo che non vi siano costi aggiuntivi per il cliente.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(14) Quanto costano gli oneri di connessione?">
                                            <p>{`Il costo relativo alla connessione dell'impianto è regolato dalle normative nazionali e varia in funzione della potenza dell'impianto installato, al massimo, per connessioni che non richiedono interventi sulla rete da parte del distributore, la spesa da sostenere per l'iter di connessione è di circa 180€.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(15) Cosa si intende per EPS (backup)?">
                                            <p>{`EPS è l'acronimo di "Emergency Power Supply" (Alimentazione di Emergenza). Gli impianti che offriamo sono progettati per operare in modalità di backup, consentendo di alimentare i carichi essenziali anche in caso di blackout della rete.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(16) Quanto spazio occupa un impianto fotovoltaico?">
                                            <p>Lo spazio occupato dell’impianto dipende dalle tue esigenze e dalle specifiche tecniche dei moduli fotovoltaici utilizzati. Facendo riferimento soprattutto alle piccole applicazioni, un valore indicativo di occupazione di superficie è di circa 6 mq per ogni kW di potenza installata.</p>
                                        </AccordionTab>
                                        <AccordionTab header="(17) In quanto tempo si ammortizza la spesa di un impianto fotovoltaico?">
                                            <p>{`Il tempo di ammortamento di un impianto fotovoltaico, che va dai 4 a 7 anni in media, dipende da fattori come dimensione, costo iniziale, efficienza e manutenzione. Gli incentivi, come la detrazione fiscale del 50% del costo dell'impianto e lo scambio sul posto che consente la renumerazione dell'energia in eccedenza immessa in rete e poi prelevata dalla rete stessa in un altro momento, possono ridurre notevolmente questo periodo.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(18) Perché conviene installare un sistema di accumulo?">
                                            <p>{`l'integrazione di un sistema di accumulo con un impianto fotovoltaico consente di ottimizzare l'autoconsumo dell'energia prodotta dall'impianto stesso. Durante le ore di picco di produzione, l'energia in eccesso può essere immagazzinata nel sistema di accumulo per essere utilizzata quando l'impianto non è attivo, come di sera o durante la notte. Questo porta a un notevole aumento dei benefici economici, riducendo al minimo la dipendenza dall'energia prelevata dalla rete elettrica. Si tratta di un passaggio fondamentale per raggiungere l'autosufficienza energetica.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(19) A cosa serve l'Inverter?">
                                            <p>{`L'inverter è un componente indispensabile nei sistemi fotovoltaici poiché converte l'energia generata dai moduli fotovoltaici in corrente continua (CC) in corrente alternata (CA). Questa conversione è di fondamentale importanza per poter utilizzare l'energia prodotta poiché la maggior parte degli apparecchi domestici e industriali richiedono un'alimentazione in corrente alternata.`}</p>
                                        </AccordionTab>
                                        <AccordionTab header="(20) Quanto dura un impianto fotovoltaico?">
                                            <p>La durata di un impianto fotovoltaico dipende dalla qualità dei materiali utilizzati, dalla progettazione, dalle condizioni ambientali e dalla manutenzione. Offriamo impianti di alta qualità che non richiedono interventi di manutenzione significativi. Eco Green Way impiega esclusivamente prodotti forniti da leader del settore, che garantiscono oltre 25 anni di affidabilità e prestazioni, inverter e batterie di alta gamma con garanzia di 10 anni. Considerando che il primo impianto fotovoltaico installato in Italia risale a circa 30 anni fa ed è ancora funzionante, è evidente che la durata di vita di un impianto fotovoltaico può essere estremamente lunga.</p>
                                        </AccordionTab>
                                    </Accordion>
                                </div>
                            </div>





























                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" >
                    <div className="row pt-5">
                        <div className="col-12 mb-4 px-4">
                            <div className="row mb-5 p-4" style={{ background: 'rgba(256, 256, 256, .05)' }}>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: '5px' }}>Our Office</h5>
                                        <p className="mb-4 m-md-0">123 Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: '5px' }}>Email Us</h5>
                                        <p className="mb-4 m-md-0">info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: '5px' }}>Call Us</h5>
                                        <p className="m-0">+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <p>Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea, est et et lorem ut at erat, gubergren ipsum et ipsum elitr et rebum rebum</p>
                                    <div className="d-flex justify-content-start mt-4">
                                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Our Products</h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white btn-scroll mb-2" href="#service"><i className="fa fa-angle-right mr-2"></i>Solar System</a>
                                        <a className="text-white btn-scroll mb-2" href="#service"><i className="fa fa-angle-right mr-2"></i>Wind Turbine</a>
                                        <a className="text-white btn-scroll mb-2" href="#service"><i className="fa fa-angle-right mr-2"></i>Wind Generator</a>
                                        <a className="text-white btn-scroll mb-2" href="#service"><i className="fa fa-angle-right mr-2"></i>Solar Energy</a>
                                        <a className="text-white btn-scroll" href="#service"><i className="fa fa-angle-right mr-2"></i>Solar Panel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 mb-5">
                            <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Newsletter</h5>
                            <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                            <div className="w-100">
                                <div className="input-group">
                                    <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Your Email Address" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary px-4">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .05) !important' }}>
                    <p className="m-0 text-white">&copy; <a href="#">Domain Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
                <div style={{position:'absolute',top:0, marginLeft:'-2000px', marginTop:'-900px'}}>
                <div ref={printRef}>
                    <div className="container-fluid " id="about">
                        <div className="container py-5">
                            <div className="row align-items-center">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div className="col-lg-10">
                                        <label style={{ marginBottom: '10px' }}>{`Inserire la Regione d'installazione`}</label>
                                        <Dropdown style={{ marginTop: '10px' }}>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {region != '' ? region : 'Select Region'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {regionList.map((item, index) => {
                                                    return (
                                                        <Dropdown.Item key={index} href="#" onClick={() => setRegion(item)}>{item}</Dropdown.Item>

                                                    )
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-lg-2">
                                        {region != '' &&
                                            <div style={{ marginTop: '40px', marginBottom: '20px' }}>{data?.find((item: any) => { return item.REGIONE.name == region })?.REGIONE.value ?? 'select region'}</div>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                    <label>Consumo annuo cliente [kWh]</label>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div className="col-lg-4 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <label className="color">F1</label>
                                            <label className="color" style={{ marginTop: '10px', marginBottom: '10px' }}>{F1 as any == 0 ? '-' : `${((F1 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={F1} onChange={(e) => setF1(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                        <div className="d-flex justify-content-between">
                                            <label className="color">F2</label>
                                            <label className="color">{F2 as any == 0 ? '-' : `${((F2 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={F2} onChange={(e) => setF2(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-1" style={{ marginLeft: '2px' }}>
                                        <div className="d-flex justify-content-between">
                                            <label className="color">F3</label>
                                            <label className="color">{F3 as any == 0 ? '-' : `${((F3 / (F1 + F2 + F3)) * 100).toFixed(2)}%`}</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={JSON.stringify(F3)} onChange={(e) => setF3(e.target?.value?.length > 0 ? parseFloat(e.target.value) : 0)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                    <div className="bg-web">
                                        Consumo annuo totale (kWh) {(F1 + F2 + F3).toFixed(2)}
                                    </div>
                                </div>
                                <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="col-lg-8 mt-4" >
                                        <label>Prezzo medio bolletta luce IVA (€/kWh)</label>
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Valore_Inserito} onChange={(e) => setValore(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div className="d-flex justify-content-between">
                                            <label style={{ marginTop: '60px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : Valore_Inserito as any === 0 ? 'DA INSERIRE' : 'valore inserito'}</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="col-lg-6 row mt-2" style={{ position: 'relative' }}>
                                        <label>Tensione riportata in bolletta [V]</label>
                                        <div className='col-lg-8' style={{ marginTop: '5px', marginBottom: '5px' }}>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    {boletta != '' ? boletta : 'Select boletta'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {bolettaList.map((item, index) => {
                                                        return (
                                                            <Dropdown.Item key={index} href="#" onClick={() => setBoletta(item)}>{item}</Dropdown.Item>
                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='col-lg-4'>
                                            <label style={{ marginTop: '10px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : boletta as any == '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                        </div>
                                        <label style={{ color: 'red', position: 'absolute', top: 65 }}>{boletta == '220/230 monofase' ? 'seleziona FV MAX KWP_6' : ``}</label>

                                    </div>
                                    <div className="col-lg-6 row mt-2">
                                        <label>{`Potenza dell impianto fotovoltaico`}</label>
                                        <div className='col-lg-8'>
                                            <Dropdown style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    {fotovoltaico != '' ? fotovoltaico : 'Select fotovoltaico'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {fotovoltaicoList.map((item, index) => {
                                                        return (
                                                            <Dropdown.Item key={index} href="#" onClick={() => setFotovoltaico(item)}>{item}</Dropdown.Item>

                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='col-lg-4'>
                                            <label style={{ marginTop: '10px' }} className="color">{data.find(item => { return item.REGIONE.name == region })?.REGIONE.value === 'non disponibile' ? '-' : monoFace === '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" style={{ marginTop: '20px', marginBottom: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="bg-web">
                                        Produzione annua (kWh) {produ.toFixed(2)}
                                    </div>
                                </div>
                                <div className="col-lg-12 row mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div className='col-lg-8'>
                                        <label>Capacità batteria accumulo</label>

                                        <Dropdown style={{ marginTop: '5px', marginBottom: '5px' }}>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {accumulo != '' ? accumulo : 'Select accumulo'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {accumuloList.map((item, index) => {
                                                    return (
                                                        <Dropdown.Item key={index} href="#" onClick={() => setAccumulo(item)}>{item}</Dropdown.Item>

                                                    )
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className='col-lg-4'>
                                        <label style={{ marginTop: '50px' }} className="color">{G14 == 'INSERIRE VALORE CORRETTO' ? 'INSERIRE VALORE CORRETTO' : data?.find((item: any) => { return item.REGIONE.name == region })?.REGIONE.value == 'non disponibile' ? '-' : accumulo == '-' ? 'DA INSERIRE' : 'valore inserito'}</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
                                    <div className="col-lg-6 row mt-2" style={{ position: 'relative' }}>
                                        <label>Aggiungere una Wallbox?</label>

                                        <div className='col-lg-8'>
                                            <Dropdown style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    {walbox != '' ? walbox : 'Select walbox'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {walboxList.map((item, index) => {
                                                        return (
                                                            <Dropdown.Item key={index} href="#" onClick={() => setWalbox(item)}>{item}</Dropdown.Item>

                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='col-lg-4'>
                                            <label style={{ marginTop: '10px' }} className="color">{walbox === 'NO' ? '-' : 'valore inserito'}</label>
                                        </div>
                                        <label style={{ color: 'red', position: 'absolute', top: 65 }}>{boletta == '"380/400 TRIFASEfase' ? 'Wallbox SOLO 22 kW' : boletta == '220/230 monofase' ? 'Wallbox SOLO 7,4 kW' : ''}</label>
                                    </div>
                                    <div style={{ flexDirection: 'column' }}>
                                        <div className="col-lg-6 row" style={{ marginTop: '5%' }}>
                                            <label>Capacità batteria auto [kWh]</label>
                                            <div className="form-group " style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={batteria_auto} onChange={(e) => setbatteria(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                            </div>
                                            <div className='col-lg-4'>
                                                <label style={{ marginTop: '10px' }} className="color">{batteria_auto == 0 ? '-' : 'valore inserito'}</label>
                                            </div>
                                        </div>
                                        <div>{Capacità_batteria === 0 ? '-' : 'valore inserito'}</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3" style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="bg-web-blue">
                                        Tempo di ricarica stimato (h) {data20?.find((item) => { return item?.N == walbox })?.Q != null ? (batteria_auto / (data20?.find((item) => { return item?.N == walbox })?.Q as any)).toFixed(2) : 'N/A'}
                                    </div>
                                </div>






                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="total" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <h2>{`Totale "Chiavi in mano" iva 10% inclusa`}</h2>
                                                <h2 className="text-white">{(Chiavi == 0 || Chiavi == '-') ? Chiavi : `${Chiavi.toLocaleString()}€`}</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="total bg-dark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <p className="text-white" style={{ width: '80%' }}>FVT con pratica detrazione fiscale 50% in 10 anni. Wallbox bonus 80% (spesa max 1.500€ privati / 8.000€ condomini).</p>

                                                <h2 className="text-white">{H18.toLocaleString()}€</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gallery padding mb-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="product-item mb-2">

                                                    <div className="bg-secondary text-center p-4">
                                                        <h3 className="m-0" style={{ margin: '0', padding: '0' }}>{`RITORNO SULL INVESTIMENTO`}</h3>
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            <p className="pt-3" style={{ width: '90%' }}>{`Numero di anni per ritornare dell investimento, pagato con bonifico parlante. Per semplicità, si considera la detrazione fiscale 50% attualizzata al momento del pagamento stesso.`}</p>
                                                            <p className='pt-3' style={{ fontSize: '20px', fontWeight: 'bold' }}>{Math.floor(ritorno).toLocaleString('en-US')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="product-item mb-2">
                                                            <div className="bg-secondary text-center p-4">
                                                                <h3 className="m-0" style={{ margin: '0', height: '10px', padding: '0' }}>INVESTIMENTO</h3>
                                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                                                    <p className="pt-3" style={{ marginTop: '-10px', margin: '0', padding: '0' }}>{`BENEFICIO INVESTIMENTO in 25 anni (compreso decadimento all 80%).`}</p>
                                                                    <p className='pt-3' style={{ fontSize: '30px', marginTop: '-10px', fontWeight: 'bold' }}>{Math.floor(parseInt(investimento)).toLocaleString('en-US')}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="product-item mb-2">

                                                            <div className="bg-secondary text-center p-4" style={{ marginTop: '-10px' }}>
                                                                <h3 className="m-0">BENEFICIO</h3>
                                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                                                    <p className="pt-3" style={{ marginTop: '-10px' }}>{`BENEFICIO INVESTIMENTO annuo (compreso decadimento all 80%).`}</p>
                                                                    <p className='pt-3' style={{ fontSize: '30px', marginTop: '-10px', fontWeight: 'bold' }}>{Math.floor(parseInt(beneficio)).toLocaleString('en-US')}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 mt-5">
                                            <h3 className="m-0">PROIEZIONE FINANZIAMENTO</h3>

                                            <div className="col-lg-12 p-0 mt-3">
                                                <label>Anticipo</label>
                                                <label style={{ fontWeight: '500', fontSize: '18px', marginLeft: '10px' }}>( {accontoValue} € )</label>
                                                <Dropdown style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                        {FINANZIAMENTO != '' ? FINANZIAMENTO : 'Select FINANZIAMENTO'}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {FINANZIAMENTOList.map((item, index) => {
                                                            return (
                                                                <Dropdown.Item key={index} href="#" onClick={() => setFINANZIAMENTO(item)}>{item}</Dropdown.Item>

                                                            )
                                                        })}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="col-lg-12 p-0 mt-3" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                <label>Età richiedente:</label>
                                                <div className="form-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={termine_del_finanziamento} onChange={(e) => settermine_del_finanziamento(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 p-0 mt-3">
                                                <label>Max 78 anni (al termine del finanziamento):</label>
                                                <div className="form-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <input type="number" disabled={true} style={{ color: (termine_del_finanziamento + (O50 / 12)) > 78 ? 'red' : '' }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={termine_del_finanziamento + (O50 / 12)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 p-0 mt-3">
                                                <label>N° mesi finanziamento (max 120):</label>
                                                <div className="form-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={O50} onChange={(e) => { parseInt(e.target.value) < 121 && setO50(e.target.value.length > 0 ? parseFloat(e.target.value) : 0) }} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 p-0 mt-3">
                                                <label>Rata mensile (indicativa):</label>
                                                <div className="form-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={indicative.toFixed(2)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 p-0 mt-3">
                                                <label>Rata con SmartHome:</label>
                                                <div className="form-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                                    <input type="number" className="form-control green" id="exampleInputEmail1" aria-describedby="emailHelp" value={(indicative - 44).toFixed(2)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-5">
                                            <div className="product-item mb-2">
                                                <div className="product-img">
                                                    <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                                        <i className="fa fa-2x fa-plus text-white"></i>
                                                    </a>
                                                </div>
                                                <div className="bg-smoke text-center p-4">
                                                    <h3 className="m-0">PROIEZIONE BENEFICIO MENSILE</h3>
                                                    <p className="pt-3">Beneficio medio mensile generato da: Risparmio in bolletta; Recupero della detrazione fiscale del 50%; Contributo vendita energia (GSE).</p>
                                                    <label style={{ width: '100%', textAlign: 'center' }}>{beneficio_mencil?.toFixed(2)}</label>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="grey">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="blue">
                                                    <h2>Con SMARTHOME DUAL sconto di:</h2><br />
                                                    <h4>-44€/mese per i primi 12 mesi, poi</h4> <br />
                                                    <h4>{`-26,40€/mese fino a completa restituzione dell importo (iva 10%)`}</h4>

                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="whitearea">
                                                    <h3>QUANTO SPAZIO SERVE PER INSTALLARE IL FOTOVOLTAICO SELEZIONATO?</h3>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label className="pt-3">TETTO A FALDE (m2)</label>
                                                            <div className="grey-box">{O40}</div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label className="pt-3">TETTO PIANO (m2)</label>
                                                            <div className="grey-box">{O43}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

























































































                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>


                </div>


                </div>


            </body >
        </div >
    )
}
