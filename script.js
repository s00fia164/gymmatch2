body {
    font-family: Arial, sans-serif;
    background-color: #FFFFFF;
    color: #000000;
    margin: 0;
    padding: 0;
}

header {
    text-align: center;
    padding: 20px;
    background-color: #87CEFA;
}

#logo {
    width: 100px;
}

h1 {
    font-size: 2.5em;
}

section {
    margin: 20px;
    padding: 10px;
    background-color: #f0f8ff;
    border-radius: 8px;
}

.swiper-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 200px;
}

.swipe-img {
    display: none;
    max-width: 100%;
    max-height: 100%;
}

.swipe-img:first-of-type {
    display: block;
}

.actions {
    text-align: center;
    margin-top: 10px;
}

.actions button {
    font-size: 1.5em;
    background-color: #87CEFA;
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

#trainer-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

#trainer-table th, #trainer-table td {
    padding: 8px;
    text-align: left;
    border: 1px solid #87CEFA;
}

#trainer-table th {
    background-color: #87CEFA;
    color: white;
}

/* Stylizacja dla małych ekranów (telefony) */
@media screen and (max-width: 600px) {
    #trainer-table th, #trainer-table td {
        padding: 6px;
        font-size: 14px;
    }

    #trainer-table {
        width: 100%;
        margin: 0;
    }

    /* Zmniejszenie wielkości czcionki w tabeli na małych ekranach */
    #trainer-table th, #trainer-table td {
        font-size: 12px;
    }

    section {
        margin: 10px;
        padding: 5px;
    }

    h1 {
        font-size: 2em;
    }
}
