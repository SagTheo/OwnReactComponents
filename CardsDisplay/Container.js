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

  return (
    <>
      <Menu routes={routes} absolute={false} />
    {
      !picsLoaded ? (
        <p>Loading...</p>
      )
      :
      (
        <div className={styles.cardsContainer}>
          <div className={styles.cardsLeft}>
            <div className={styles.cardsLeftTop}>
              <PortfolioCard src={pictures[0].src} alt={pictures[0].alt} title={pictures[0].title} />
              <PortfolioCard src={pictures[1].src} alt={pictures[1].alt} title={pictures[1].title} />
            </div>
            <PortfolioCard src={pictures[2].src} alt={pictures[2].alt} title={pictures[2].title} />
          </div>
          <div className={styles.cardsRight}>
            <PortfolioCard src={pictures[3].src} alt={pictures[3].alt} title={pictures[3].title} />
            <div className={styles.cardsRightBottom}>
              <PortfolioCard src={pictures[4].src} alt={pictures[4].alt} title={pictures[4].title} />
              <PortfolioCard src={pictures[5].src} alt={pictures[5].alt} title={pictures[5].title} />
            </div>
          </div>
        </div>
      )
    }
    </>
  )