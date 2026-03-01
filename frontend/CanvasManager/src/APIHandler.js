import { useEffect, useState } from "react";

export function Get_API(endpoint, params)
{
    const [result, setResult] = useState("");
    const origin = "http://localhost:8000/api"
    const pString = generateParamString(params);

    useEffect(() => {
    fetch(origin + endpoint + pString)
    .then(res => res.json())
    .then(data => setResult(data.result))
  }, []);

  var response = {
    result: result,
  }

  return response
}

function generateParamString(params)
{
    const usp = new URLSearchParams(params);
    const qs = usp.toString();

    return qs ? `?${qs}` : "";
}
