<template>
    <div class="recu-content">
     <div class="top-border bordered"></div>

     <div class="info-section">
        <div class="top-info-left">
            <img src="/img/Logo2.png" alt="">
            <p class="recu_mail"> senden@gmail.com </p>
            <p class="recu_mail"> 01 23 43 45 22 </p>

        </div>
        <div class="top-info-right">
            <h2>Reçu de paiement</h2>
            <p class="recu_num"> N° 1234455 </p>
        </div>
     </div>
     <div class="middle-border bordered"></div>

     <div class="info-section second">
        <div class="top-info-left">
            <h4 class="recu_mail"> INFORMATIONS MARCHAND </h4>
            <h5>Profession-Juriste</h5>
            <p class="recu_mail">sendenmail@gmail.com</p>

        </div>
        <div class="top-info-right">
            <h4>INFORMATIONS CLIENT</h4>
            <h5>Numéro de téléphone</h5>

            <p class="recu_num"> N° 1234455 </p>
        </div>
     </div>

     <div class="fird">
            <div class="t-border">
                <h5 class="t-desc" >Description</h5>
                <h5>Quantité</h5>
                <h5>Prix unitaire TTC</h5>
                <h5>Montant</h5>
            </div>
            <div class="t_info">
                <p class="t_info-desc">
                    Paiement de KIT Modèles et documents juridiques - Droit du travail (PDF)
                </p>
                <p>1</p>
                <p>35 000 XOF</p>
                <p>35 000 XOF</p>
            </div>
            <div class="fird-footer">
                <h4>Total TTC</h4>
                <h4>35 000 XOF</h4>
            </div>

     </div>
     <div class="fourth">
        <h4>INFORMATIONS SUR LA TRANSACTION</h4>
        <h5>Date de paiement</h5>
        <P>2023-10-19 09:51:19</P>

        <h5>Date de paiement</h5>
        <P>2023-10-19 09:51:19</P>

        <h5>ID Transaction</h5>
        <P>3543589784</P>

        <h5>ID Operateur</h5>
        <P>MP231019.0951.B18347</P>

        <h5>Moyen de paiement</h5>
        <P>Orange Money</P>
     </div>

    </div>
  </template>
  <style scoped >
    .recu-content{
        /* position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
        width: 800px;
        height: auto;
        background-color: #fff;
        margin: 0 auto;
    }


    .bordered{
        background-color: #d3770d;

    }
    .top-border{
        height: 40px;
    }

    .middle-border{
        height: 15px;
        margin: 2rem 0;

     }


    .info-section{
        display: flex;
        justify-content: space-between;
        padding: 0  2rem;
    }
    .info-section h5{
        margin-top: 3rem;
    }

    .top-info-left p{
        margin: 0;
    }

    .top-info-left img {
      width: 180px;
    }

    .second{
        height: 30vh;
    }

    .top-info-right{
        text-align: right;
    }

    /* fird part */
   
    .t-border{
        background-color: #d3770d;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 2rem;
    }

    .t-border h5{
        margin-bottom: 0;
    }

    .t_info{
        display: flex;
        justify-content: space-between;

    }

    .t-border th:first-child{
        width: 60%;
        padding-left: 1.5rem;
    }

    .t_info{
        padding: 0 2rem;
        background-color: #ad8e631f;
    }

    .t-desc{
        width: 50%;
    }
    .t_info-desc{
        width: 50%;

    }

    .fird-footer{
        display: flex;
        justify-content: flex-end;
        padding: 13px 0;
        border-bottom: 2px solid #d3770d;
    }

    .fird-footer h4{
        width: 150px;
        text-align: center;
        margin-bottom: 0px;
    }

    .fourth{
        padding: 2rem;
    }
  </style>
  <script >
  
  </script>
  