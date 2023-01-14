import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from "../../../actions/userActions"
import './Detect.css'


const Detect = () => {
    const [search, setSearch] = useState('A')
    const [medData, setMedData] = useState([])
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState(false)
    const searchValue = useRef()
    const userLogin = useSelector(state => state.userLogin)
    const {Loading,error,userInfo} = userLogin

    const searchItem = () => {
        setSearch(searchValue.current.value)
    }
    useEffect(() => {
        searchValue.current.focus()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
    }

   const dispatch = useDispatch();
    const applyHandler = (companyName, studentID) => {
        console.log(companyName, studentID)
        dispatch(getUserDetails(companyName, studentID));
        
    }


    const fetchMedicines = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/v1/students/dashboard?search=${search}`)
            const data = await res.json()
            setLoading(false)
            const medicineData = data
            if (medicineData) {
                setMedData(medicineData)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMedicines()
    }, [search])
    const changeData = (disease) => {
        const newData = medData.filter((d) => d.disease === disease)
        setDetail(true)
        setMedData(newData)
    }
    const oldData = () => {
        setDetail(false)
        fetchMedicines()
    }
    return <>
        {!detail ? <form onSubmit={handleSubmit} className="sign-form">
            <input type="text" ref={searchValue} onChange={searchItem} className="ml-10 w-2/3 h-10 text-black p-3"/>
            <button type='submit' className="input-submit">search</button>
        </form> : <></>}
        <div className="w-full">
              
                {/* {!detail ? <div className="grid-box">{
                medData.map((d) => {
                    console.log(d);
                    return (
                        
                    <div className="mx-[50px]">
                    <p className="bg-gray-100 text-black p-3">{d.name}</p>
                    <hr/>
                    </div>
                        )
                })
            }</div> : <></>} */}

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                            <th scope="col" class="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Job Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                CTC
                            </th>
                            <th scope="col" class="px-6 py-3">
                                MIN CPI
                            </th>
                            <th scope="col" class="px-6 py-3">
                                APPLY
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        medData.map((d) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d.name}
                            </th>
                            <td class="px-6 py-8">
                                {d.jobProfile && d.jobProfile.jobDescription}
                            </td>
                            <td class="px-6 py-8">
                            {d.jobProfile && d.jobProfile.ctc}
                            </td>
                            <td class="px-6 py-8">
                            {d.jobProfile && d.jobProfile.mincgpa}
                            </td>
                            <td class="px-6 py-8">
                                <button className="text-blue-800 underline" onClick={()=>alert(`You Successfully Applied To ${d.name}`)}>APPLY</button>
                            </td>
                        </tr>
                                
                                )
                        })
                    }
                    </tbody>
                </table>
            </div>

        </div>
    </>

}


export default Detect;