import React, { Fragment, useEffect, useState } from 'react';
import { getLatestCryptoData } from '../../api/crypto';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


// const tempData = [
//     {
//         "id": 9595,
//         "name": "g412xwv0fi8",
//         "symbol": "jw8ukc2vsjm",
//         "slug": "h0btyp1qpeo",
//         "cmc_rank": 9236,
//         "num_market_pairs": 6475,
//         "circulating_supply": 1403,
//         "total_supply": 9462,
//         "max_supply": 4145,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "hypcvxoqcdb",
//             "p2eot1cr8jd",
//             "50my890kz1b",
//             "8msv8ql5duf",
//             "tjnkc109fj",
//             "ymtnjcdq6uh",
//             "ogd9604b3bk",
//             "kjvv2gravp",
//             "1bk95zkjvsv",
//             "fu7s32mzs1f"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.22010901645746905,
//                 "volume_24h": 665,
//                 "volume_change_24h": 0.30143790154167727,
//                 "percent_change_1h": 0.7422667602925779,
//                 "percent_change_24h": 0.7617006533847701,
//                 "percent_change_7d": 0.4264187895789162,
//                 "market_cap": 0.4056070782290968,
//                 "market_cap_dominance": 7759,
//                 "fully_diluted_market_cap": 0.6905996882068353,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 9764,
//                 "volume_24h": 3764,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 1077,
//                 "market_cap_dominance": 5945,
//                 "fully_diluted_market_cap": 0.24713083961788307,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 2075,
//         "name": "h6jftpm3l6i",
//         "symbol": "tcoqwxf7hr",
//         "slug": "foekxhwu0ir",
//         "cmc_rank": 6774,
//         "num_market_pairs": 980,
//         "circulating_supply": 3481,
//         "total_supply": 4602,
//         "max_supply": 3432,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "hmq02dov3us",
//             "mpgit8kfl1k",
//             "r1d9tmd4i88",
//             "6xnf6mqgm5",
//             "j8510jsijrq",
//             "eevz1qi66kq",
//             "jzu1ofatmpk",
//             "j6a3oehgia",
//             "bynqz0ntulv",
//             "ky2cw9xr2gf"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.32477647940483045,
//                 "volume_24h": 7559,
//                 "volume_change_24h": 0.36416671406941115,
//                 "percent_change_1h": 0.8141397595533792,
//                 "percent_change_24h": 0.12585850684528133,
//                 "percent_change_7d": 0.686875387801346,
//                 "market_cap": 0.38648330286291266,
//                 "market_cap_dominance": 7171,
//                 "fully_diluted_market_cap": 0.4972004490772042,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 7536,
//                 "volume_24h": 4021,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 1988,
//                 "market_cap_dominance": 2468,
//                 "fully_diluted_market_cap": 0.07907165305334107,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 6596,
//         "name": "m6kl4d3s0js",
//         "symbol": "mg0gmn0yet",
//         "slug": "qz6kycabjqo",
//         "cmc_rank": 8912,
//         "num_market_pairs": 6433,
//         "circulating_supply": 3082,
//         "total_supply": 7935,
//         "max_supply": 8152,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "z0fqslyqw2e",
//             "jmbo6k1ekl",
//             "dnvq7lrlde7",
//             "bhzb9v7rr1q",
//             "z95ubtxs2ul",
//             "ss29x9o8rm",
//             "hyrpgj6152k",
//             "ftds19tresa",
//             "bxoejkqg649",
//             "vcfhur7t8oq"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.3156453198604925,
//                 "volume_24h": 6983,
//                 "volume_change_24h": 0.026209818535087637,
//                 "percent_change_1h": 0.8051645133706804,
//                 "percent_change_24h": 0.05693814448380019,
//                 "percent_change_7d": 0.8412913194961438,
//                 "market_cap": 0.49008937400448516,
//                 "market_cap_dominance": 2635,
//                 "fully_diluted_market_cap": 0.10947026406131344,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 9912,
//                 "volume_24h": 7651,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 2587,
//                 "market_cap_dominance": 3035,
//                 "fully_diluted_market_cap": 0.16591967916399808,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 7936,
//         "name": "c6ukk4777lp",
//         "symbol": "zk8u2f8yv3",
//         "slug": "6pogkodmh8i",
//         "cmc_rank": 8291,
//         "num_market_pairs": 845,
//         "circulating_supply": 3280,
//         "total_supply": 8926,
//         "max_supply": 8329,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "3qifnjdqs86",
//             "re2ylez0py",
//             "4di8dy0s0lp",
//             "97czvrauxgt",
//             "kwvs9of2qto",
//             "mhhrbf6jcof",
//             "w70u5x44pkg",
//             "3oqg3iwo0r6",
//             "cm09d6dvuc",
//             "rpy8u79rw9k"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.8690678193034436,
//                 "volume_24h": 966,
//                 "volume_change_24h": 0.78947258593719,
//                 "percent_change_1h": 0.21357880721553135,
//                 "percent_change_24h": 0.9983775630283525,
//                 "percent_change_7d": 0.6229031487860492,
//                 "market_cap": 0.8913313768812539,
//                 "market_cap_dominance": 7745,
//                 "fully_diluted_market_cap": 0.09377589561569977,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 6358,
//                 "volume_24h": 5789,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 8685,
//                 "market_cap_dominance": 7744,
//                 "fully_diluted_market_cap": 0.47352497343426614,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 2611,
//         "name": "xrwkhc5p3p",
//         "symbol": "13n1vuwwtzi9",
//         "slug": "ld6lt8wnmpe",
//         "cmc_rank": 2059,
//         "num_market_pairs": 5437,
//         "circulating_supply": 7795,
//         "total_supply": 6796,
//         "max_supply": 4413,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "cn0h0c943bk",
//             "6cooh9e1jlx",
//             "sapfmcbhtz",
//             "f53sb35z13",
//             "p7pznncgie9",
//             "culupiaraip",
//             "bcxrp899fo6",
//             "reh6pwe8ap",
//             "z5rtap19rcm",
//             "gkd6l2yy3fu"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.5529968749523966,
//                 "volume_24h": 5466,
//                 "volume_change_24h": 0.2220948034183543,
//                 "percent_change_1h": 0.2712165072345192,
//                 "percent_change_24h": 0.24029138694237306,
//                 "percent_change_7d": 0.05479186350413534,
//                 "market_cap": 0.03949179947325265,
//                 "market_cap_dominance": 3560,
//                 "fully_diluted_market_cap": 0.05909733386746274,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 1580,
//                 "volume_24h": 3403,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 560,
//                 "market_cap_dominance": 9963,
//                 "fully_diluted_market_cap": 0.769110926906539,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 1642,
//         "name": "i4df2swe6fs",
//         "symbol": "ji0idnrlnd8",
//         "slug": "e9vz93de61k",
//         "cmc_rank": 6868,
//         "num_market_pairs": 463,
//         "circulating_supply": 6636,
//         "total_supply": 7805,
//         "max_supply": 862,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "oqpoa20ca1n",
//             "az3rxgwmnxg",
//             "rhfxq1lcqb",
//             "52t4js7irsm",
//             "80i638vdv7n",
//             "or90atxipdh",
//             "jhktioez8u",
//             "gjghuyh61a9",
//             "1vaicnxgpv",
//             "b6a9h3lswh"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.4225694155645303,
//                 "volume_24h": 6594,
//                 "volume_change_24h": 0.9191596730039839,
//                 "percent_change_1h": 0.42391111656232927,
//                 "percent_change_24h": 0.31913946125155457,
//                 "percent_change_7d": 0.5749288415990472,
//                 "market_cap": 0.9897017775818986,
//                 "market_cap_dominance": 7496,
//                 "fully_diluted_market_cap": 0.7280293669696458,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 2129,
//                 "volume_24h": 1849,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 1386,
//                 "market_cap_dominance": 2590,
//                 "fully_diluted_market_cap": 0.273870605581892,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 9801,
//         "name": "s7b1ldho39n",
//         "symbol": "io1avku97q9",
//         "slug": "bfjl6sms41k",
//         "cmc_rank": 5347,
//         "num_market_pairs": 4358,
//         "circulating_supply": 6202,
//         "total_supply": 647,
//         "max_supply": 7080,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "8ndmo483sid",
//             "0jg1j6mhrheu",
//             "2gufaz372w6",
//             "xvgew2326v",
//             "5q7nl1l7pud",
//             "ly7dbg6bcm",
//             "ii63egmo84",
//             "5e0mg1r9qfq",
//             "xv16k7j6mj",
//             "9tllzdhoreb"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.9356629078192613,
//                 "volume_24h": 1765,
//                 "volume_change_24h": 0.5055479126781703,
//                 "percent_change_1h": 0.7095494390876078,
//                 "percent_change_24h": 0.910076124688624,
//                 "percent_change_7d": 0.6152622405757782,
//                 "market_cap": 0.5777085901352408,
//                 "market_cap_dominance": 3688,
//                 "fully_diluted_market_cap": 0.3194665444422391,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 8797,
//                 "volume_24h": 8179,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 2598,
//                 "market_cap_dominance": 7493,
//                 "fully_diluted_market_cap": 0.33079167175370316,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 8909,
//         "name": "xr4tn9r9u8g",
//         "symbol": "q8tumbozff",
//         "slug": "ch0yywmpu1v",
//         "cmc_rank": 1427,
//         "num_market_pairs": 4598,
//         "circulating_supply": 4140,
//         "total_supply": 3341,
//         "max_supply": 1277,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "rgvhepee43r",
//             "exr0ybdri6",
//             "3fx62sq0u7p",
//             "237i8cd20c4",
//             "blqc29zx56",
//             "beysqcs4fbv",
//             "3g3y8htt62c",
//             "lo64k8rc4ks",
//             "k84xqyvw4",
//             "nwh7qd8z6nc"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.5719105844698702,
//                 "volume_24h": 3909,
//                 "volume_change_24h": 0.9917193704868403,
//                 "percent_change_1h": 0.3529342132225528,
//                 "percent_change_24h": 0.0191139743478963,
//                 "percent_change_7d": 0.3257222240206765,
//                 "market_cap": 0.5157786400742819,
//                 "market_cap_dominance": 7125,
//                 "fully_diluted_market_cap": 0.49153379337788916,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 691,
//                 "volume_24h": 9590,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 3477,
//                 "market_cap_dominance": 2978,
//                 "fully_diluted_market_cap": 0.854797817734988,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 9831,
//         "name": "7ybf4z9fweb",
//         "symbol": "v2bmb4f1xyj",
//         "slug": "iyl78itb29",
//         "cmc_rank": 3689,
//         "num_market_pairs": 7854,
//         "circulating_supply": 5007,
//         "total_supply": 6480,
//         "max_supply": 9447,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "ivt7v485tk",
//             "l8kkyza7zkn",
//             "xz2y6t9p3n",
//             "uv9bi8akor",
//             "269etqrvhzt",
//             "sqjc8cad93",
//             "lxrkp488rai",
//             "d5necwiae6",
//             "ezdi5izb2dd",
//             "6xmk3a8a9u9"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.9056286495531636,
//                 "volume_24h": 36,
//                 "volume_change_24h": 0.8803173333528722,
//                 "percent_change_1h": 0.24519346630885486,
//                 "percent_change_24h": 0.990197317160836,
//                 "percent_change_7d": 0.568552293912324,
//                 "market_cap": 0.5785243478224749,
//                 "market_cap_dominance": 8783,
//                 "fully_diluted_market_cap": 0.2156421262655419,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 7570,
//                 "volume_24h": 1999,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 8029,
//                 "market_cap_dominance": 6220,
//                 "fully_diluted_market_cap": 0.8742708626200144,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     },
//     {
//         "id": 9092,
//         "name": "e909ji214yt",
//         "symbol": "bz7uhqrjsgh",
//         "slug": "91xwixkxoch",
//         "cmc_rank": 6014,
//         "num_market_pairs": 8401,
//         "circulating_supply": 9279,
//         "total_supply": 7062,
//         "max_supply": 9974,
//         "infinite_supply": null,
//         "last_updated": "2023-04-10T09:23:58.767Z",
//         "date_added": "2023-04-10T09:23:58.767Z",
//         "tags": [
//             "ukdh5vf58w",
//             "4mdbzrs2go2",
//             "jxxuxaq8huh",
//             "d78n9d7ie7",
//             "f30ca16z58v",
//             "s9hvpah8vqg",
//             "etiktb0u4sv",
//             "izioy6r54yc",
//             "xh12852743e",
//             "zo2fvhczb5"
//         ],
//         "platform": null,
//         "self_reported_circulating_supply": null,
//         "self_reported_market_cap": null,
//         "quote": {
//             "USD": {
//                 "price": 0.7517729792006476,
//                 "volume_24h": 5290,
//                 "volume_change_24h": 0.8985573803607154,
//                 "percent_change_1h": 0.28529800864668364,
//                 "percent_change_24h": 0.8513664561285197,
//                 "percent_change_7d": 0.062018587767566524,
//                 "market_cap": 0.42589482435925885,
//                 "market_cap_dominance": 8070,
//                 "fully_diluted_market_cap": 0.12688023033221052,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             },
//             "BTC": {
//                 "price": 3845,
//                 "volume_24h": 7363,
//                 "volume_change_24h": null,
//                 "percent_change_1h": null,
//                 "percent_change_24h": null,
//                 "percent_change_7d": null,
//                 "market_cap": 3943,
//                 "market_cap_dominance": 7903,
//                 "fully_diluted_market_cap": 0.6118237013126326,
//                 "last_updated": "2023-04-10T09:23:58.767Z"
//             }
//         }
//     }
// ]

const CustomTableRow = ({current, currency}) => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow>
                {/* expand button */}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">{current.name}</TableCell>
                <TableCell align="right">{current.cmc_rank}</TableCell>
                <TableCell align="right">{current.symbol}</TableCell>
                <TableCell align="right">{current.quote[currency].price}</TableCell>
                <TableCell align="right">{current.quote[currency].volume_change_24h}</TableCell>
            </TableRow>
        </Fragment>
    )
}

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [currency, setCurrency] = useState('USD');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                setLoading(true);
                const {status, data: cryptoData} = await getLatestCryptoData();
                console.log('status: ', status)
                console.log('cryptoData: ', cryptoData)
                setCryptoData(cryptoData);
            }
            catch (eInfo) {
                console.error('Error fetching crypto data: ', eInfo)
            }
            finally {
                setLoading(false);
            }
        }
        fetchCryptoData();
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div style={styles.table_div}>
            <div style={styles.table_info_row}>
                <div>Total items {cryptoData.length}</div>
                <div>
                    <button>Reload</button>
                </div>
            </div>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Rank</TableCell>
                            <TableCell align="right">Symbol</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">24 hr change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptoData.map(current => (
                            <CustomTableRow key={current.id} current={current} currency={currency}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const styles = {
    table_div: {
        height: '100%',
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px 5px',
        padding: '10px 5px',
    },
    table_info_row: {
        display: 'flex',
        gap: '10px 5px'
    }
}

export default CryptoTable;