import { useApi } from "../APIHandler"

function RandNums ({num, min, max})
{
    const {data, loading, error} = useApi("/randNums", {num: num, min: min, max: max});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: ({error.message})</p>

    const numbers = data?.result ?? [];
    var stringBuilder = ""

    for (var i = 0; i < numbers.length; i++)
    {
        if (i == 0) stringBuilder += numbers[i]
        else {
            stringBuilder += ", " + numbers[i]
        }
    }

    return(
        <div className="RandNums">{stringBuilder}</div>
    )
}

export default RandNums