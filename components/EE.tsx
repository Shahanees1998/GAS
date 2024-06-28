'use client'

import React, { useState, useRef } from 'react'
import { Dropdown } from 'react-bootstrap'
import { addEEI5J28, addEEK5L28, addGASI5J28, addGASK5L28, deleteEEI5J28, deleteEEK5L28, deleteGASI5J28, deleteGASK5L28, editEEI5J28, editEEK5L28, editGASI5J28, editGASK5L28 } from '../actions/useractions'
import { useRouter } from 'next/navigation'

export default function EE({ eei5, eeik, gasi5, gasik, password }: { eei5: any, eeik: any, gasi5: any, gasik: any, password: any }) {
    const router = useRouter()
    const [edit, setEdit] = useState()
    const [add1, setAdd1] = useState(false)
    const [add2, setAdd2] = useState(false)
    const [editValue, setEditValue] = useState<any>()
    const [editMonth, setEditMonth] = useState<any>()
    const [inputPassword, setPassword] = useState<any>()
    const [manageEE, setManageEE] = useState(false)
    const [manageGAS, setManageGAS] = useState(false)
    const editeeif = async (id: string) => {
        await editEEI5J28(id, { month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const addeeif = async () => {
        await addEEI5J28({ month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const deleteeeif = async (id: string) => {
        await deleteEEI5J28(id)
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }

    const editeeik = async (id: string) => {
        await editEEK5L28(id, { month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const addeeik = async () => {
        await addEEK5L28({ month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const deleteeeik = async (id: string) => {
        await deleteEEK5L28(id)
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }


    const editgasif = async (id: string) => {
        await editGASI5J28(id, { month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const addgasif = async () => {
        await addGASI5J28({ month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const deletegasif = async (id: string) => {
        await deleteGASI5J28(id)
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }


    const editgasik = async (id: string) => {
        await editGASK5L28(id, { month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const addgasik = async () => {
        await addGASK5L28({ month: editMonth, value: parseFloat(editValue ?? '0') })
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const deletegasik = async (id: string) => {
        await deleteGASK5L28(id)
        setEditMonth(undefined)
        setEditValue(undefined)
        setAdd1(false)
        setAdd2(false)
        setEdit(undefined)
        router.refresh()
    }
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {

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
    };
    const [activeSection, setActiveSection] = useState('EE')
    const [EEtipoLIst, setTipoList] = useState([
        { label: 'DOMESTICO', value: 5.78 }, { label: 'ALTRI USI', value: 9.42 }
    ])

    const [EEtipologia, setTipologia] = useState('')
    const [EEcompetenzo, EEsetCompetenzo] = useState('')
    const [EEcompetenzo1, EEsetCompetenzo1] = useState('')

    const [EED12, EEsetcuzumo] = useState<number>(0)
    const [EED15, EEsetcuzumo1] = useState<number>(0)

    const [EEmensileLIst, EEsetMensileList] = useState([
        { label: 'MENSILE', value: EEtipoLIst?.find((item: any) => { return item.label == EEtipologia })?.value }, { label: 'BIMESTRALE', value: (EEtipoLIst?.find((item: any) => { return item.label == EEtipologia })?.value) }
    ])
    const [EEfrequenza, EEsetFrequenza] = useState('')
    // const EEG9 = IFERROR(VLOOKUP(D11,K5:L28,2,0),0)
    const EEG9 = eeik?.find((item: any) => { return item.month == EEcompetenzo })?.value
    const EEG10 = eeik?.find((item: any) => { return item.month == EEcompetenzo1 })?.value
    const [EED17, setEED17] = useState<number>(0)
    const EEE8 = EEfrequenza == EEmensileLIst[0].label ? EEtipoLIst?.find((item: any) => { return item.label == EEtipologia })?.value : (EEtipoLIst?.find((item: any) => { return item.label == EEtipologia })?.value ?? 1) * 2
    const EEE10 = (EEG9 ?? 1) * (EED12 ?? 1) * 1.1
    const EEE12 = (EEG10 ?? 1) * (EED15 ?? 1) * 1.1
    const EEE14 = (EED17 ?? 0) - (EEE8 ?? 0) - EEE10 - EEE12
    const [EED19, setEED19] = useState<number>(0)
    const [EEC30D32, setEEC30D32] = useState([{ label: 'NO', value: 0 }, { label: 'SI', value: 5 }])
    const EEC31D32 = [{ label: 'NO', value: 0 }, { label: 'SI', value: 5 }]
    const [EED22, setEED22] = useState<number>(0)

    const EEE16 = (EEE14 + (EED19 ?? 0)) / ((EED12 ?? 0) + (EED15 ?? 0))
    const EED34 = EEC31D32?.find((item: any) => { return item?.label == EED22 })?.value

    const [EEG23H24, setEEG23H24] = useState([{ label: 'MENSILE', value: 1.95 }, { label: 'BIMESTRALE', value: 3.9 }])
    const [EEC34D35, setEEC34D35] = useState([{ label: 'MENSILE', value: EED34 }, { label: 'BIMESTRALE', value: ((EED34 ?? 1) * 2) }])
    const [EEC37D38, setEEC37D38] = useState([{ label: 'MENSILE', value: -2 }, { label: 'BIMESTRALE', value: -4 }])
    const [EEG25H26, setEEG25H26] = useState([{ label: 'MENSILE', value: 4.95 }, { label: 'BIMESTRALE', value: 9.9 }])
    const [EEG27H28, setEEG27H28] = useState([{ label: 'MENSILE', value: 9.95 }, { label: 'BIMESTRALE', value: 19.9 }])
    const EED22Options = ['NO', 'SI']
    // =VLOOKUP(EED22,C30:D32,2,0)
    const [EED24, setEED24] = useState<number>(0)
    // =VLOOKUP(D8,G23:H24,2,0)
    const EEH14 = EEG23H24.find((item: any) => { return item?.label == EEfrequenza })?.value
    // =(0.12*EED12)+(0.12*EED15)        =(0.029*D12)*1.1+(0.029*D15)*1.1+(0.013*D12)+(0.013*D15)
    const EEG14 = ((0.029 * (EED12 ?? 1)) * 1.1) + ((0.029 * (EED15 ?? 1)) * 1.1) + (0.013 * (EED12 ?? 1)) + (0.013 * (EED15 ?? 1))
    // =IFERROR(VLOOKUP(D14,I5:J28,2,0),0)
    const EEH12 = eei5?.find((item: any) => { return item.month == EEcompetenzo1 })?.value

    // =IFERROR(VLOOKUP(D14,I5:J28,2,0),0)
    const EEH11 = eei5?.find((item: any) => { return item.month == EEcompetenzo })?.value
    // EEH12*EED15
    const EEG12 = (EEH12 ?? 1) * (EED15 ?? 1)
    // =(0.033*D12)*1.1+(0.033*D15)*1.1+(0.015*D12)+(0.015*D15)
    const EEG15 = ((0.033 * (EED12 ?? 1)) * 1.1) + ((0.033 * (EED15 ?? 1)) * 1.1) + (0.015 * (EED12 ?? 1)) + (0.015 * (EED15 ?? 1))
    // =(0.25*EED12)+(0.25*EED15) =(0.037*D12)*1.1+(0.037*D15)*1.1+(0.018*D12)+(0.018*D15)
    const EEG16 = ((0.037 * (EED12 ?? 1)) * 1.1) + ((0.037 * (EED15 ?? 1)) * 1.1) + (0.018 * (EED12 ?? 1)) + (0.018 * (EED15 ?? 1))
    // =VLOOKUP(D8,G25:H26,2,0)
    const EEH15 = EEG25H26?.find((item: any) => { return item?.label == EEfrequenza })?.value
    // =VLOOKUP(D8,G27:H28,2,0)
    const EEH16 = EEG27H28?.find((item: any) => { return item?.label == EEfrequenza })?.value

    const EEG11 = (EEH11 ?? 1) * (EED12 ?? 1)
    // =VLOOKUP(D8,C34:D35,2,0)
    const EEA22 = EEC34D35?.find((item: any) => { return item?.label == EEfrequenza })?.label == 'MENSILE' ? EED34 : ((EED34 ?? 1) * 2)
    // =VLOOKUP(D8,C37:D38,2,0)*EED24
    const EEA24 = (EEC37D38?.find((item: any) => { return item?.label == EEfrequenza })?.value ?? 1) * (EED24 ?? 1)
    // =G11*10%
    const EEG18 = EEG11 * (10 / 100)
    // =G12*10%
    const EEG19 = EEG12 * (10 / 100)
    // =H14+G14+G12+G11+E12+E10+E8+A22+A24+G18+G19
    const EEA26 = (EEH14 ?? 0) + EEG14 + EEG12 + EEG11 + EEE12 + EEE10 + (EEE8 ?? 0) + (EEA22 ?? 0) + EEA24 + EEG18 + EEG19
    // =G15+H15+G12+G11+E12+E10+E8+A22+A24+G18+G19
    const EEA27 = EEG15 + (EEH15 ?? 0) + EEG12 + EEG11 + EEE12 + EEE10 + (EEE8 ?? 0) + (EEA22 ?? 0) + EEA24 + EEG18 + EEG19
    // =G16+H16+G12+G11+E12+E10+E8+A22+A24+G18+G19
    const EEA28 = EEG16 + (EEH16 ?? 0) + EEG12 + EEG11 + EEE12 + EEE10 + (EEE8 ?? 0) + (EEA22 ?? 0) + EEA24 + EEG18 + EEG19

    // =IFERROR(EEA26/(EED17+EED19),0)
    const EED26 = EEA26 / ((EED17 ?? 0) + (EED19 ?? 0))
    const EED27 = EEA27 / ((EED17 ?? 0) + (EED19 ?? 0))
    const EED28 = EEA28 / ((EED17 ?? 0) + (EED19 ?? 0))

    const EED5 = EEtipologia
    const EEC40D41 = [{ label: 'MENSILE', value: 12 }, { label: 'BIMESTRALE', value: 6 }]
    const EEE6 = EEtipoLIst?.find((item: any) => { return item?.label == EEtipologia })?.value



















    const [GAStipoLIst, GASsetTipoList] = useState([
        { label: 'DOMESTICO', value: 5.61 }, { label: 'ALTRI USI', value: 7.36 }
    ])

    const [GAStipologia, GASsetTipologia] = useState('')
    const [GAScompetenzo, GASsetCompetenzo] = useState('')
    const [GAScompetenzo1, GASsetCompetenzo1] = useState('')

    const [GASD12, GASsetcuzumo] = useState<number>(0)
    const [GASD15, GASsetcuzumo1] = useState<number>(0)

    const [GASmensileLIst, setMensileList] = useState([
        { label: 'MENSILE', value: GAStipoLIst?.find((item: any) => { return item.label == GAStipologia })?.value }, { label: 'BIMESTRALE', value: (GAStipoLIst?.find((item: any) => { return item.label == GAStipologia })?.value) }
    ])
    const [GASfrequenza, GASsetFrequenza] = useState('')
    // const GASG9 = IFERROR(VLOOKUP(D11,K5:L28,2,0),0)
    const GASG9 = gasik?.find((item: any) => { return item.month == GAScompetenzo })?.value
    const GASG10 = gasik?.find((item: any) => { return item.month == GAScompetenzo1 })?.value
    const [GASD17, setGASD17] = useState<number>(0)
    const GASE8 = GASfrequenza == GASmensileLIst[0].label ? GAStipoLIst?.find((item: any) => { return item.label == GAStipologia })?.value : (GAStipoLIst?.find((item: any) => { return item.label == GAStipologia })?.value ?? 1) * 2
    const GASE10 = (GASG9 ?? 1) * (GASD12 ?? 1)
    const GASE12 = (GASG10 ?? 1) * (GASD15 ?? 1)
    const GASE14 = (GASD17 ?? 0) - (GASE8 ?? 0) - GASE10 - GASE12
    const [GASD19, setGASD19] = useState<number>(0)
    const [GASC30D32, setGASC30D32] = useState([{ label: 'NO', value: 0 }, { label: 'SI', value: 5 }])
    const GASE16 = (GASE14 + (GASD19 ?? 0)) / ((GASD12 ?? 0) + (GASD15 ?? 0))
    const [GASD22, setGASD22] = useState()

    const GASC34 = GASC30D32?.find((item: any) => { return item?.label == GASD22 })?.value
    const [GASG23H24, setGASG23H24] = useState([{ label: 'MENSILE', value: 1.95 }, { label: 'BIMESTRALE', value: 3.9 }])
    const [GASC34D35, setGASC34D35] = useState([{ label: 'MENSILE', value: GASC34 }, { label: 'BIMESTRALE', value: 3.9 }])
    const [GASC37D38, setGASC37D38] = useState([{ label: 'MENSILE', value: -2 }, { label: 'BIMESTRALE', value: -4 }])
    const [GASG25H26, setGASG25H26] = useState([{ label: 'MENSILE', value: 4.95 }, { label: 'BIMESTRALE', value: 9.9 }])
    const [GASG27H28, setGASG27H28] = useState([{ label: 'MENSILE', value: 9.95 }, { label: 'BIMESTRALE', value: 19.9 }])

    const GASD22Options = ['NO', 'SI']
    // =VLOOKUP(GASD22,C30:D32,2,0)
    const GASD34 = GASC30D32?.find((item: any) => { return item?.label == GASD22 })?.value
    const [GASD24, setGASD24] = useState<number>(0)
    // =VLOOKUP(D8,G23:H24,2,0)
    const GASH14 = GASG23H24.find((item: any) => { return item?.label == GASfrequenza })?.value
    // =(0.12*GASD12)+(0.12*GASD15)
    const GASG14 = (0.12 * (GASD12 ?? 1)) + (0.12 * (GASD15 ?? 1))
    // =IFERROR(VLOOKUP(D14,I5:J28,2,0),0)
    const GASH12 = gasi5?.find((item: any) => { return item.month == GAScompetenzo1 })?.value

    // =IFERROR(VLOOKUP(D14,I5:J28,2,0),0)
    const GASH11 = gasi5?.find((item: any) => { return item.month == GAScompetenzo })?.value
    // GASH12*GASD15
    const GASG12 = (GASH12 ?? 1) * (GASD15 ?? 1)


    const GASG15 = (0.18 * (GASD12 ?? 1)) + (0.18 * (GASD15 ?? 1))
    // =(0.25*GASD12)+(0.25*GASD15)
    const GASG16 = (0.25 * (GASD12 ?? 1)) + (0.25 * (GASD15 ?? 1))
    // =VLOOKUP(D8,G25:H26,2,0)
    const GASH15 = GASG25H26?.find((item: any) => { return item?.label == GASfrequenza })?.value
    // =VLOOKUP(D8,G27:H28,2,0)
    const GASH16 = GASG27H28?.find((item: any) => { return item?.label == GASfrequenza })?.value

    const GASG11 = (GASH11 ?? 1) * (GASD12 ?? 1)
    // =VLOOKUP(D8,C34:D35,2,0)
    const GASA22 = GASC34D35?.find((item: any) => { return item?.label == GASfrequenza })?.label == 'MENSILE' ? GASC34 : ((GASC34 ?? 1) * 2)
    // =VLOOKUP(D8,C37:D38,2,0)*GASD24
    const GASA24 = (GASC37D38?.find((item: any) => { return item?.label == GASfrequenza })?.value ?? 1) * (GASD24 ?? 1)
    const GASA26 = (GASH14 ?? 0) + GASG14 + GASG12 + GASG11 + GASE12 + GASE10 + (GASE8 ?? 0) + (GASA22 ?? 0) + GASA24
    const GASA27 = GASG15 + (GASH15 ?? 0) + GASG12 + GASG11 + GASE12 + GASE10 + (GASE8 ?? 0) + (GASA22 ?? 0) + GASA24
    // =G16+H16+G12+G11+E12+E10+E8+A22+A24
    const GASA28 = GASG16 + (GASH16 ?? 0) + GASG12 + GASG11 + GASE12 + GASE10 + (GASE8 ?? 0) + (GASA22 ?? 0) + GASA24
    const GASC40D41 = [{ label: 'MENSILE', value: 12 }, { label: 'BIMESTRALE', value: 6 }]

    // =IFERROR(GASA26/(GASD17+GASD19),0)
    const GASD26 = GASA26 / ((GASD17 ?? 0) + (GASD19 ?? 0))
    const GASD27 = GASA27 / ((GASD17 ?? 0) + (GASD19 ?? 0))
    const GASD28 = GASA28 / ((GASD17 ?? 0) + (GASD19 ?? 0))
    const [GASE50, setGASE50] = useState(4)
    const GASD5 = GAStipologia
    const GASD8 = GASfrequenza
    // =A26-D17-D19
    const GASB26 = GASA26 - (GASD17 ?? 0) - (GASD19 ?? 0)
    // =A27-D17-D19
    const GASB27 = GASA27 - (GASD17 ?? 0) - (GASD19 ?? 0)
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B26)
    const GASA30 = GASD17 == 0 ? 0 : ((GASC40D41?.find((item: any) => { return item?.label == GASD8 })?.value ?? 1) * (GASB26 ?? 1))
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B27)
    const GASA32 = GASD17 == 0 ? 0 : ((GASC40D41?.find((item: any) => { return item?.label == GASD8 })?.value ?? 1) * (GASB27 ?? 1))
    const GASB28 = GASA28 - (GASD17 ?? 0) - (GASD19 ?? 0)
    // =+IF(D5="ALTRI USI",A30*1.22,A30*1.1)
    const GASA31 = GASD5 == "ALTRI USI" ? (GASA30 * 1.22) : (GASA30 * 1.1)
    // =+IF(D5="ALTRI USI",A32*1.22,A32*1.1)
    const GASA33 = GASD5 == "ALTRI USI" ? (GASA32 * 1.22) : (GASA32 * 1.1)
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B28)
    const GASA34 = GASD17 == 0 ? 0 : ((GASC40D41?.find((item: any) => { return item?.label == GASfrequenza })?.value ?? 1) * GASB28)
    // =+IF(D5="ALTRI USI",A34*1.22,A34*1.1)
    const GASA35 = GAStipologia == "ALTRI USI" ? (GASA34 * 1.22) : (GASA34 * 1.1)
    // =+IF(E50=1,A31,IF(E50=2,A33,IF(E50=3,A35,IF(E50=4,"0"))))
    const GASE35 = GASE50 == 1 ? GASA31 : GASE50 == 2 ? GASA33 : GASE50 == 3 ? GASA35 : 0
















    // =A26-D17-D19
    const EEB26 = EEA26 - (EED17 ?? 0) - (EED19 ?? 0)
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B26)
    const EEA30 = EED17 == 0 ? 0 : (EEC40D41?.find((item: any) => { return item.label == EEfrequenza })?.value ?? 1) * EEB26
    const [EEE50, setEEE50] = useState(4)
    // =+IF(D5="ALTRI USI",A30*1.22,A30*1.1)
    const EEA31 = EED5 == 'ALTRI USI' ? (EEA30 * 1.22) : (EEA30 * 1.1)
    const EEB27 = EEA27 - (EED17 ?? 0) - (EED19 ?? 0)
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B27)
    const EEA32 = EED17 == 0 ? 0 : ((EEC40D41?.find((item: any) => { return item.label == EEfrequenza })?.value ?? 1) * EEB27)
    // =+IF(D5="ALTRI USI",A32*1.22,A32*1.1)
    const EEA33 = EED5 == 'ALTRI USI' ? (EEA32 * 1.22) : (EEA32 * 1.1)
    // =A28-D17-D19
    const EEB28 = EEA28 - (EED17 ?? 0) - (EED19 ?? 0)
    // =IF(D17=0, 0, VLOOKUP(D8,C40:D41,2,0)*B28)
    const EEA34 = EED17 == 0 ? 0 : (EEC40D41?.find((item: any) => { item?.label == EEfrequenza })?.value ?? 1) * EEB28

    // =+IF(D5="ALTRI USI",A34*1.22,A34*1.1)
    const EEA35 = EED5 == 'ALTRI USI' ? (EEA34 * 1.22) : (EEA34 * 1.1)

    // =+IF(E50=1,A31,IF(E50=2,A33,IF(E50=3,A35,IF(E50=4,"0"))))
    const EEE33 = EEE50 == 1 ? EEA31 : EEE50 == 2 ? EEA33 : EEE50 == 3 ? EEA35 : 0

    // =($EE.E33+$GAS.E35)
    const energicoE25 = EEE33 + GASE35
    // =IF(AND($EE.E50<>4,$GAS.E50<>4),E25-158.4,E25-79.2)
    const energicoE30 = (EEE50 != 4 && GASE50 != 4) ? (energicoE25 - 158.4) : (energicoE25 - 79.2)
    const [energicoJ34, setenergicoJ34] = useState<string>('')
    const [energicoG34, setenergicoG34] = useState<string>('')
    const [energicoD34, setenergicoD34] = useState<number>(0)


    const y7fogolioG9F15 = [
        { "label": 0.5, "value": 1 },
        { "label": 0.7, "value": 2 },
        { "label": 0.85, "value": 3 },
        { "label": 1, "value": 4 },
        { "label": 1.15, "value": 5 },
        { "label": 1.3, "value": 6 },
        { "label": 1.5, "value": 7 }
    ]
    const fogolioA1C18 = [
        { id: 1, description: "TV, computer, frigo, lavatrice, condizionatore", cost: 1100 },
        { id: 2, description: "TV, computer, frigo, lavastoviglie, lavatrice, condizionatore", cost: 1900 },
        { id: 3, description: "TV, computer, frigo, lavastoviglie, lavatrice, 2 condizionatori, scaldabagno elettrico", cost: 2400 },
        { id: 4, description: "", cost: 2800 },
        { id: 5, description: "2 TV, 2 computer, frigo, lavastoviglie, lavatrice, 3 condizionatori", cost: 4000 },
        { id: 6, description: "", cost: 5400 },
        { id: 7, description: "", cost: 6300 },
        { id: 8, description: "", cost: 7200 },
        { id: 9, description: "", cost: 8100 },
        { id: 10, description: "", cost: 9000 },
        { id: 11, description: "", cost: 9900 },
        { id: 12, description: "", cost: 10800 },
        { id: 13, description: "", cost: 11700 },
        { id: 14, description: "", cost: 12600 },
        { id: 15, description: "", cost: 13500 },
        { id: 16, description: "", cost: 14400 },
        { id: 17, description: "", cost: 15300 },
        { id: 18, description: "", cost: 16200 }
    ];
    //   =+$'TAGLIANDO ENERGETICO'.D34
    const fogolioH2 = energicoD34

    //   =+IF($EE.D8="MENSILE",12,6)
    const fogolioF2 = EEfrequenza == "MENSILE" ? 12 : 6
    const fogolioF4 = GASfrequenza == "MENSILE" ? 12 : 6
    //   =IF(F2=12,$EE.D12*12,($EE.D12+$EE.D15)*6)
    const fogolioG2 = fogolioF2 == 12 ? ((EED12 ?? 1) * 12) : (((EED12 ?? 0) + (EED15 ?? 1)) * 6)
    // =IF(F4=12,$GAS.D12*12,($GAS.D12+$GAS.D15)*6)
    const fogolioG4 = fogolioF4 == 12 ? ((GASD12 ?? 1) * 12) : (((GASD12 ?? 0) + (GASD15 ?? 0)) * 6)
    const fogolioI2 = fogolioA1C18?.find((item: any) => { return item.id == fogolioH2 })?.cost
    const fogolioJ2 = fogolioG2 / (fogolioI2 ?? 1)
    function findValue(label: any) {
        for (let i = 0; i < y7fogolioG9F15.length; i++) {
            if (label < y7fogolioG9F15[i].label) {
                if (i === 0) {
                    return y7fogolioG9F15[i].value;
                } else {
                    const prev = y7fogolioG9F15[i - 1];
                    return prev.value;
                }
            }
        }
        return y7fogolioG9F15[y7fogolioG9F15.length - 1].value;
    }


    //   =IF(J2<0.7,1,IF(J2>1.3,7,VLOOKUP(J2,F9:G15,2,TRUE())))
    const fogolioJ5 = fogolioJ2 < 0.7 ? 1 : fogolioJ2 > 1.3 ? 7 : findValue(1.09)
    const fogolioJ7 = fogolioJ5 - 1
    const fogolioJ9 = fogolioJ5 - 2
    // =IF(J34="SI",$Foglio1.J9, IF(G34="SI",$Foglio1.J7,$Foglio1.J5))
    const energicoE38 = energicoJ34 == 'SI' ? fogolioJ9 : energicoG34 == 'SI' ? fogolioJ7 : fogolioJ5
    return (
        <>
            <nav style={{ marginBottom: '100px' }} className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('EE')} className={`nav-item nav-link ${activeSection == 'EE' && 'active'}`}>EE</a>
                        <a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('GAS')} className={`nav-item nav-link ${activeSection == 'GAS' && 'active'}`}>GAS</a>
                    </div>
                    <div className="navbar-nav mr-auto py-0">
                        <a style={{ cursor: 'pointer' }} onClick={() => setActiveSection('ENERGETICO')} className={`nav-item nav-link ${activeSection == 'ENERGETICO' && 'active'}`}>TAGLIANDO ENERGETICO</a>
                    </div>
                </div>
            </nav>
            <div style={{ paddingTop: '100px' }}>


                {activeSection == 'EE' && <>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={"/images/eelogo.png"} style={{ marginRight: '10px' }} />
                        <label>SIMULAZIONE GENERATA APPLICANDO LO SCONTO REGOLARITÀ PAGAMENTI</label>
                    </div>

                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <input style={{ width: '30%', marginRight: '10px' }} placeholder='Password' value={inputPassword} onChange={(e) => setPassword(e.target.value)}></input>
                        <button style={{ paddingInline: '10px', borderRadius: '10px', marginRight: '5px' }} onClick={() => setManageEE(true)}>Manage EE Data</button>
                        <button style={{ paddingInline: '10px', borderRadius: '10px', marginRight: '5px' }} onClick={() => setManageEE(false)}>Hide EE Data</button>
                    </div>


                    {(inputPassword == password && manageEE) &&
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '48%' }}>
                                    <div style={{ display: 'flex' }}>
                                        <label>MEDIA PUN MESE</label>
                                        <button style={{ paddingInline: '10px', marginLeft: '10px', borderRadius: '20px', height: '30px' }} onClick={() => setAdd1(!add1)}>Add</button>

                                    </div>
                                    {add1 && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                        <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} onChange={(e) => setEditMonth(e.target.value as any)}></input>
                                        <input style={{ marginRight: '10px' }} type='number' value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>
                                        <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => addeeif()}>ADD</button>
                                    </div>}
                                    {
                                        eei5?.map((item: any) => {
                                            return (

                                                <div key={item?.id} style={{ marginTop: '10px' }}>
                                                    <div style={{ display: 'flex', width: '100%' }}>
                                                        <div>month</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.month}</div>    <div>value</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.value}</div> <button style={{ paddingInline: '10px', borderRadius: '20px', marginRight: '20px' }} onClick={() => setEdit(item)}>Edit</button> <button style={{ paddingInline: '10px', borderRadius: '20px' }} onClick={() => deleteeeif(item?.id)}>Delete</button>

                                                    </div>
                                                    {
                                                        (edit as any)?.id === item?.id && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                                            <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} defaultValue={(edit as any)?.month} onChange={(e) => setEditMonth(e.target.value)}></input>
                                                            <input style={{ marginRight: '10px' }} type='number' value={editValue} defaultValue={(edit as any)?.value} onChange={(e) => setEditValue(e.target.value)}></input>
                                                            <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => editeeif(item?.id)}>save</button>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{ width: '48%' }}>
                                    <div style={{ display: 'flex' }}>
                                        <label>VALORI DISPACCIAMENTO</label>
                                        <button style={{ paddingInline: '10px', marginLeft: '10px', borderRadius: '20px', height: '30px' }} onClick={() => setAdd2(!add2)}>Add</button>

                                    </div>
                                    {add2 && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                        <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} onChange={(e) => setEditMonth(e.target.value)}></input>
                                        <input style={{ marginRight: '10px' }} type='number' value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>
                                        <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => addeeik()}>ADD</button>
                                    </div>}
                                    {
                                        eeik?.map((item: any) => {
                                            return (

                                                <div key={item?.id} style={{ marginTop: '10px' }}>
                                                    <div style={{ display: 'flex', width: '100%' }}>
                                                        <div>month</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.month}</div>    <div>value</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.value}</div> <button style={{ paddingInline: '10px', borderRadius: '20px', marginRight: '20px' }} onClick={() => setEdit(edit != null ? undefined : item)}>Edit</button> <button style={{ paddingInline: '10px', borderRadius: '20px' }} onClick={() => deleteeeik(item?.id)}>Delete</button>

                                                    </div>
                                                    {(edit as any)?.id === item?.id && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                                        <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} defaultValue={(edit as any)?.month} onChange={(e) => setEditMonth(e.target.value)}></input>
                                                        <input style={{ marginRight: '10px' }} type='number' value={editValue} defaultValue={(edit as any)?.value} onChange={(e) => setEditValue(e.target.value)}></input>
                                                        <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => editeeik(item?.id)}>save</button>
                                                    </div>}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-lg-10">
                                <label style={{ fontWeight: '400', fontSize: '15px' }}>{`TIPOLOGIA D'USO`}</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {EEtipologia}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {EEtipoLIst.map((item: any, index: any) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => setTipologia(item?.label)}>{item.label}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>Tipo PCV</div>
                                <div style={{ marginTop: '10px' }}>{EEE6}</div>
                            </div>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>

                            <div className="col-lg-10">
                                <label style={{ fontWeight: '400', fontSize: '15px' }}>{`FREQUENZA FATTURAZIONE`}</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {EEfrequenza}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {EEmensileLIst.map((item: any, index: any) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => EEsetFrequenza(item?.label)}>{item.label}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>PCV TOT</div>
                                <div style={{ marginTop: '10px' }}>{EEE8}</div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <div className="col-lg-10">
                                <div style={{ width: '100%' }}>
                                    <label style={{ fontWeight: '400', fontSize: '15px' }}>{`COMPETENZA ANNO/MESE 1`}</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {EEcompetenzo}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {eei5.map((item: any, index: any) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => EEsetCompetenzo(item?.month)}>{item.month}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div style={{ marginTop: '20px' }}>CONSUMO ANNO/MESE 1 (Kwh)</div>
                                    <input style={{ fontWeight: '400', fontSize: '15px' }} placeholder='CONSUMO ANNO/MESE 1...' type={"number"} value={EED12} onChange={(e) => EEsetcuzumo(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>Disp. M1</div>
                                <div style={{ marginTop: '10px' }}>{EEE10.toFixed(2)}</div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>

                            <div className="col-lg-10">
                                <div style={{ width: '100%' }}>
                                    <label style={{ fontWeight: '400', fontSize: '15px' }}>{`COMPETENZA ANNO/MESE 2`}</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {EEcompetenzo1}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {eei5.map((item: any, index: any) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => EEsetCompetenzo1(item?.month)}>{item.month}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div style={{ marginTop: '20px' }}>CONSUMO ANNO/MESE 2 (Kwh)</div>
                                    <input style={{ fontWeight: '400', fontSize: '15px' }} placeholder='CONSUMO ANNO/MESE 2...' type={"number"} value={EED15} onChange={(e) => EEsetcuzumo1(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>


                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>Disp. M2</div>
                                <div style={{ marginTop: '10px' }}>{EEE12.toFixed(2)}</div>
                            </div>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingInline: '15px', marginTop: '20px', justifyContent: 'space-between' }}>
                            <div className='col-lg-6' style={{ display: 'flex', color: 'white', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`ME - PCV - Disp.`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{EEE14.toFixed(2)}</label>
                            </div>
                            <div className='col-lg-6' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`ME EQ., al lordo delle perdite (€/kWh) `}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{EEE16.toFixed(2)}</label>
                            </div>
                        </div>


                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>COSTO MATERIA ENERGIA (€)</label>
                            <input type={"number"} placeholder='COSTO MATERIA ENERGIA...' value={EED17} onChange={(e) => setEED17(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>

                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>ALTRI ONERI COSTO ENERGIA [NO CONN./INTERESSI MORA...] (€)</label>
                            <input type={"number"} placeholder='ALTRI ONERI COSTO ENERGIA [NO CONN./INTERESSI MORA...' value={EED19} onChange={(e) => setEED19(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>

                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>{`OPZIONE PREMIUM?`}</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {EED22}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {EED22Options.map((item: any, index: any) => {
                                        return (
                                            <Dropdown.Item key={index} href="#" onClick={() => setEED22(item)}>{item}</Dropdown.Item>

                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>QUANTE ANAGRAFICHE CLUB0 COLLEGHERAI?</label>
                            <input type={"number"} placeholder='QUANTE ANAGRAFICHE CLUB0 COLLEGHERAI...' value={EED24} onChange={(e) => setEED24(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingInline: '15px', marginTop: '20px', justifyContent: 'space-between' }}>
                            <div className='col-lg-3' style={{ display: 'flex', color: 'white', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open3/Seren Ultra`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(EED26 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setEEE50(1)} checked={EEE50 == 1} value={`Seleziona I'Offerta`} />
                                </div>

                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open5/Seren Ultra `}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(EED27 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setEEE50(2)} checked={EEE50 == 2} value={`Seleziona I'Offerta`} />
                                </div>
                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open8/Seren Ultra`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(EED28 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setEEE50(3)} checked={EEE50 == 3} value={`Seleziona I'Offerta`} />
                                </div>
                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`NESUNNA OFFERTA SELEZIOA`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setEEE50(4)} checked={EEE50 == 4} value={`NESUNNA OFFERTA SELEZIOA`} />
                                </div>
                            </div>
                        </div>

                    </div>
                </>
                }
                {
                    (activeSection as any) == 'GAS' &&
                    <>

                        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={"/images/gas.png"} style={{ marginRight: '10px' }} />
                            <label>SIMULAZIONE GENERATA APPLICANDO LO SCONTO REGOLARITÀ PAGAMENTI</label>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <input style={{ width: '30%', marginRight: '10px' }} placeholder='Password' value={inputPassword} onChange={(e) => setPassword(e.target.value)}></input>
                            <button style={{ paddingInline: '10px', borderRadius: '10px', marginRight: '5px' }} onClick={() => setManageGAS(true)}>Manage GAS Data</button>
                            <button style={{ paddingInline: '10px', borderRadius: '10px', marginRight: '5px' }} onClick={() => setManageGAS(false)}>Hide GAS Data</button>
                        </div>


                        {(inputPassword == 'admin123' && manageGAS) &&
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ width: '48%' }}>
                                        <div style={{ display: 'flex' }}>
                                            <label>PSV MESE</label>
                                            <button style={{ paddingInline: '10px', marginLeft: '10px', borderRadius: '20px', height: '30px' }} onClick={() => setAdd1(!add1)}>Add</button>

                                        </div>
                                        {add1 && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                            <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} onChange={(e) => setEditMonth(e.target.value)}></input>
                                            <input style={{ marginRight: '10px' }} type='number' value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>
                                            <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => addgasif()}>ADD</button>
                                        </div>}
                                        {
                                            gasi5?.map((item: any) => {
                                                return (
                                                    <div key={item?.id}>
                                                        <div style={{ marginTop: '10px' }}>
                                                            <div style={{ display: 'flex', width: '100%' }}>
                                                                <div>month</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.month}</div>    <div>value</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.value}</div> <button style={{ paddingInline: '10px', borderRadius: '20px', marginRight: '20px' }} onClick={() => setEdit(item)}>Edit</button> <button style={{ paddingInline: '10px', borderRadius: '20px' }} onClick={() => deletegasif(item?.id)}>Delete</button>
                                                            </div>
                                                        </div>
                                                        {
                                                            (edit as any)?.id === item?.id && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                                                <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} defaultValue={(edit as any)?.month} onChange={(e) => setEditMonth(e.target.value)}></input>
                                                                <input style={{ marginRight: '10px' }} type='number' value={editValue} defaultValue={(edit as any)?.value} onChange={(e) => setEditValue(e.target.value)}></input>
                                                                <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => editgasif(item?.id)}>save</button>
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>












                                    <div style={{ width: '48%' }}>
                                        <div style={{ display: 'flex' }}>
                                            <label>VALORI QVD VAR. + PCS</label>
                                            <button style={{ paddingInline: '10px', marginLeft: '10px', borderRadius: '20px', height: '30px' }} onClick={() => setAdd2(!add2)}>Add</button>

                                        </div>
                                        {add2 && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                            <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} onChange={(e) => setEditMonth(e.target.value)}></input>
                                            <input style={{ marginRight: '10px' }} type='number' value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>
                                            <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => addgasik()}>ADD</button>
                                        </div>}
                                        {
                                            gasik?.map((item: any) => {
                                                return (

                                                    <div key={item?.id} style={{ marginTop: '10px' }}>
                                                        <div style={{ display: 'flex', width: '100%' }}>
                                                            <div>month</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.month}</div>    <div>value</div> <div>:</div> <div style={{ marginRight: '40px' }}>{item?.value}</div> <button style={{ paddingInline: '10px', borderRadius: '20px', marginRight: '20px' }} onClick={() => setEdit(edit != null ? undefined : item)}>Edit</button> <button style={{ paddingInline: '10px', borderRadius: '20px' }} onClick={() => deletegasik(item?.id)}>Delete</button>

                                                        </div>
                                                        {(edit as any)?.id === item?.id && <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                                            <input style={{ backgroundColor: 'white !important', marginRight: '10px', border: '1px solid black !imoprtant', borderRadius: '10px' }} value={editMonth} defaultValue={(edit as any)?.month} onChange={(e) => setEditMonth(e.target.value)}></input>
                                                            <input style={{ marginRight: '10px' }} type='number' value={editValue} defaultValue={(edit as any)?.value} onChange={(e) => setEditValue(e.target.value)}></input>
                                                            <button style={{ paddingInline: '10px', borderRadius: '20px', height: '30px' }} onClick={() => editgasik(item?.id)}>save</button>
                                                        </div>}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div >
                            </div>
                        }



                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-lg-10">
                                <label style={{ fontWeight: '400', fontSize: '15px' }}>{`TIPOLOGIA D'USO`}</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {GAStipologia}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {GAStipoLIst.map((item: any, index: any) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => GASsetTipologia(item?.label)}>{item.label}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>Tipo QVD FIX</div>
                                <div style={{ marginTop: '10px' }}>{GAStipoLIst?.find((item: any) => { return item.label == GAStipologia })?.value ?? 'select region'}</div>
                            </div>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>

                            <div className="col-lg-10">
                                <label style={{ fontWeight: '400', fontSize: '15px' }}>{`FREQUENZA FATTURAZIONE`}</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {GASfrequenza}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {GASmensileLIst.map((item: any, index: any) => {
                                            return (
                                                <Dropdown.Item key={index} href="#" onClick={() => GASsetFrequenza(item?.label)}>{item.label}</Dropdown.Item>

                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>QVD TOT.</div>
                                <div style={{ marginTop: '10px' }}>{GASE8}</div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <div className="col-lg-10">
                                <div style={{ width: '100%' }}>
                                    <label style={{ fontWeight: '400', fontSize: '15px' }}>{`COMPETENZA ANNO/MESE 1`}</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {GAScompetenzo}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {gasi5.map((item: any, index: any) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => GASsetCompetenzo(item?.month)}>{item.month}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div style={{ marginTop: '20px' }}>CONSUMO ANNO/MESE 1 (Smc)</div>
                                    <input style={{ fontWeight: '400', fontSize: '15px' }} placeholder='CONSUMO ANNO/MESE 1 (Smc)...' type={"number"} value={GASD12} onChange={(e) => GASsetcuzumo(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>(QVD VAR + 0,02 PCS) mese 1</div>
                                <div style={{ marginTop: '10px' }}>{GASE10}</div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>

                            <div className="col-lg-10">
                                <div style={{ width: '100%' }}>
                                    <label style={{ fontWeight: '400', fontSize: '15px' }}>{`COMPETENZA ANNO/MESE 2`}</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {GAScompetenzo1}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {gasi5.map((item: any, index: any) => {
                                                return (
                                                    <Dropdown.Item key={index} href="#" onClick={() => GASsetCompetenzo1(item?.month)}>{item.month}</Dropdown.Item>

                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div style={{ marginTop: '20px' }}>CONSUMO ANNO/MESE 2 (Smc)</div>
                                    <input style={{ fontWeight: '400', fontSize: '15px' }} placeholder='CONSUMO ANNO/MESE 2 (Smc)...' type={"number"} value={GASD15} onChange={(e) => GASsetcuzumo1(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />
                                </div>
                            </div>


                            <div className="col-lg-2">
                                <div style={{ fontWeight: '400', fontSize: '15px', marginTop: '20px' }}>(QVD VAR + 0,02 PCS) mese 2</div>
                                <div style={{ marginTop: '10px' }}>{GASE12}</div>
                            </div>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingInline: '15px', marginTop: '20px', justifyContent: 'space-between' }}>
                            <div className='col-lg-6' style={{ display: 'flex', color: 'white', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>MG - PCV - (QVD VAR + 0,02 PCS)</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{GASE14}</label>
                            </div>
                            <div className='col-lg-6' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`MG EQ. (€/Smc)`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{GASE16}</label>
                            </div>
                        </div>


                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>COSTO MATERIA GAS (€)</label>
                            <input type={"number"} placeholder='COSTO MATERIA GAS (€)...' value={GASD17} onChange={(e) => setGASD17(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>
                        <div className="col-lg-12">
                            <div style={{ marginTop: '40px' }}>MG EQ. (€/Smc) {GASE16}</div>
                        </div>

                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>ALTRI ONERI COSTO GAS [NO CONN./INTERESSI MORA...] (€)</label>
                            <input type={"number"} placeholder='ALTRI ONERI COSTO ENERGIA [NO CONN./INTERESSI MORA...' value={GASD19} onChange={(e) => setGASD19(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>

                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>{`OPZIONE PREMIUM?`}</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {GASD22}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {GASD22Options.map((item: any, index: any) => {
                                        return (
                                            <Dropdown.Item key={index} href="#" onClick={() => setGASD22(item)}>{item}</Dropdown.Item>

                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-lg-10" style={{ marginTop: '20px' }}>
                            <label style={{ fontWeight: '400', fontSize: '15px' }}>QUANTE ANAGRAFICHE CLUB0 COLLEGHERAI?</label>
                            <input type={"number"} placeholder='QUANTE ANAGRAFICHE CLUB0 COLLEGHERAI...' value={GASD24} onChange={(e) => setGASD24(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingInline: '15px', marginTop: '20px', justifyContent: 'space-between' }}>
                            <div className='col-lg-3' style={{ display: 'flex', color: 'white', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open3/Seren Ultra`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(GASD26 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setGASE50(1)} checked={GASE50 == 1} value={`Seleziona I'Offerta`} />
                                </div>
                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open5/Seren Ultra `}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(GASD27 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setGASE50(2)} checked={GASE50 == 2} value={`Seleziona I'Offerta`} />
                                </div>
                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ fontWeight: '800', fontSize: '20px', color: 'white' }}>{`Open8/Seren Ultra`}</label>
                                <label style={{ fontWeight: '400', fontSize: '15px', color: 'white' }}>{parseInt(JSON.stringify(GASD28 * 100))}%</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`Seleziona I'Offerta`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setGASE50(3)} checked={GASE50 == 3} value={`Seleziona I'Offerta`} />
                                </div>
                            </div>
                            <div className='col-lg-3' style={{ display: 'flex', backgroundColor: '#8089a1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ color: 'white', marginBottom: '0', marginRight: '4px' }}>{`NESUNNA OFFERTA SELEZIOA`}</p>
                                    <input style={{ width: '20px' }} type="radio" id="html" name="fav_language" onClick={() => setGASE50(4)} checked={GASE50 == 4} value={`NESUNNA OFFERTA SELEZIOA`} />
                                </div>
                            </div>
                        </div>

                    </>
                }

















                {
                    activeSection == 'ENERGETICO' && <div ref={printRef}>

                        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={"/images/gas.png"} style={{ marginRight: '10px' }} />
                            <label>STAGLIANDO ENERGETICO</label>
                        </div>


                        <div className='col-lg-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <button onClick={() => handlePrint()} style={{ borderRadius: '10px', paddingInline: '20px', backgroundColor: 'gray' }}>Print</button>
                        </div>


                        <div style={{ paddingInline: '10px' }}>
                            <div style={{ marginTop: '20px', display: 'flex', borderBottom: '1px solid black' }}>
                                <div style={{ width: '33%' }}>
                                    <label>SITUAZIONE ATTUALE</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label>ENERGIA</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label>GAS</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Tipologia d'uso`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EEtipologia}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GAStipologia}</label>
                                </div>

                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Frequenza di fatturazione`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EEfrequenza}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GASfrequenza}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Competenza anno/mese1`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EEcompetenzo}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GAScompetenzo}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>


                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Consumo anno/mese1 (kWh/Smc)`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EED12}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GASD12}</label>
                                </div>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Competenza anno/mese2`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EEcompetenzo1}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GAScompetenzo1}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Consumo anno/mese2 (kWh/Smc)`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EED15}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GASD15}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Consumo annuo stimato (kWh/Smc)`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : fogolioG2}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : fogolioG4}</label>
                                </div>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Costo materia energia + altri oneri (€)`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : (EED17 + EED19)}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : ((GASD17 ?? 0) + (GASD19 ?? 0))}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Opzione premium?`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EED22}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GASD22}</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '14px' }}>{`Quante anagrafiche Club Zero collegherai?`}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{EEE50 == 4 ? '-' : EED24}</label>
                                </div>
                                <div style={{ width: '33%' }}>
                                    <label style={{ fontSize: '12px' }}>{GASE50 == 4 ? '-' : GASD24}</label>
                                </div>
                            </div>







                        </div>

                        <div style={{ marginTop: '20px', paddingInline: '10px' }}>
                            <div style={{ border: '2px solid #6c757d' }}>
                                <div className="col-lg-12" style={{ marginTop: '20px' }}>
                                    <div>IL RISPARMIO ANNUALE GENERATO* È PARI A:</div>
                                </div>
                                <div className="col-lg-12">
                                    <div>{energicoE25}</div>
                                </div>
                            </div>


                            <div style={{ marginTop: '10px', border: '2px solid #6c757d' }}>

                                <div className="col-lg-12" style={{ marginTop: '20px' }}>
                                    <div>PORTANDO 3 AMICI IN SEREN**, IL RISPARMIO AUMENTA A:</div>
                                </div>
                                <div className="col-lg-12">
                                    <div>{energicoE30}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div style={{ marginTop: '40px' }}>QUANTE PERSONE VIVONO IN CASA? </div>
                            <input type={"number"} value={energicoD34} onChange={(e) => setenergicoD34(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)} />

                        </div>
                        <div className="col-lg-10">
                            <label>{`AUTO IBRIDA?`}</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {energicoG34}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {GASC30D32.map((item: any, index: any) => {
                                        return (
                                            <Dropdown.Item key={index} href="#" onClick={() => setenergicoG34(item?.label)}>{item.label}</Dropdown.Item>

                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-lg-10">
                            <label>{`AUTO ELETTRICA?`}</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {energicoJ34}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {GASC30D32.map((item: any, index: any) => {
                                        return (
                                            <Dropdown.Item key={index} href="#" onClick={() => setenergicoJ34(item?.label)}>{item.label}</Dropdown.Item>

                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-lg-12" style={{ marginTop: '20px' }}>
                            <div>INDICATORE SINTETICO DI EFFICIENZA
                                CALCOLATO SU MEDIA CONSUMI NAZIONALE (DA 1 A 7):
                            </div>
                        </div>
                        <div className="col-lg-12" style={{ marginTop: '20px' }}>
                            <div>{energicoE38}</div>
                        </div>
                    </div>
                }
            </div >

        </>
    )
}
