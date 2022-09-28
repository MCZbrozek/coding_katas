// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
    // => WE ARE THE CHAMPIONS MY FRIEND

    song = ("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")

    function songDecoder(song) {
        // return song.split('WUB').filter(word => word.trim()).join(' ')
        // split the string on WUB
        // filter out the empty strings
        // join back together on a space
        const split = song.split('WUB')
        console.log(split)
        const filterWord = split.filter(word => word.trim())
        console.log(filterWord)
        const decoded = filterWord.join(' ')
        return decoded
    }

    console.log(songDecoder(song))

    //regex

    function songDecoder1(song) {
        return song.replace(/(WUB)+/g, ' ').trim()
    }

    console.log(songDecoder1(song))