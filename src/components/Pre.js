import React, { useState, useEffect } from "react";

function Pre() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5 saniye sonra preloader'ı gizle
    const timer = setTimeout(() => setLoading(false), 5000);

    // Component unmount olduğunda timer'ı temizle
    return () => clearTimeout(timer);
  }, []);

  return <div id={loading ? "preloader" : "preloader-none"}></div>;
}

export default Pre;

