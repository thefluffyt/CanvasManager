import { useEffect, useRef, useState } from "react";

export function useApi(endpoint, params = {}, options)
{
  const origin = "http://localhost:8000/api"
  const pString = generateParamString(params);

  const path = origin + endpoint + pString;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortRef = useRef(null)

useEffect(() => {
  abortRef.current?.abort()
  const controller = new AbortController()
  abortRef.current = controller

  let on = true;
  (async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch (path, {...options, signal: controller.signal})
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const json = await res.json();
      if (on) setData(json);
    } catch (e) {
      if (controller.signal.aborted) return;
      if (on) setError(e);
    } finally {
      if (on) setLoading(false);
    }
  })();
  return () => { on = false; controller.abort()};
  }, [path, JSON.stringify(options)]);

  return { data, loading, error };
}


function generateParamString(params)
{
    const usp = new URLSearchParams(params);
    const qs = usp.toString();

    return qs ? `?${qs}` : "";
}
