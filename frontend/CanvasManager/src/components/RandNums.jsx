function RandNums ({numbers})
{
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