const [picsLoaded, setPicsLoaded] = useState(false)

  useEffect(() => {
    const loadPic = pic => {
      return new Promise((res, rej) => {
        const loadPic = new Image()
        
        loadPic.src = pic.src

        loadPic.onload = res(pic.src)

        loadPic.onerror = err => rej(err)
      })
    }

    Promise.all(pictures.map(pic => loadPic(pic)))
      .then(() => setPicsLoaded(true))
      .catch(err => console.log(err))
  }, [])