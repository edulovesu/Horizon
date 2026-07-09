import {useState, useEffect} from 'react'

export default function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState(null)


    useEffect(() => {
        fetch(url)
        .then( res => {
            if(!res.ok){
                throw new Error('Failed to fetch data')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(err => {
            SetError(err.message)
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}