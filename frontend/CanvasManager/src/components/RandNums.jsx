import { Get_API } from "../APIHandler"

function RandNums ({num, min, max})
{
    var numbers = Get_API("/randNums", {num: num, min: min, max: max}).result;
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