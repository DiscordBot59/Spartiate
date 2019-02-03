préf  préfixe  = ( " $ " );

module . exports  =  classe  ban {
     match statique ( message ) {
      renvoyer le  message . contenu . startsWith ( ' / ban ' )
    }
            
     action statique ( message ) {
      const  args  =  message . contenu . tranche ( préfixe . longueur ). divisé ( /  + / );
      const  commande  =  args . shift (). toLowerCase ();
        if ( ! message . member . permissions . has ( ' ADMINISTRATOR ' )) renvoie le  message . reply ( ' tu n \' est pas admin. ' );
           membre  const =  message . mentions . membres . premier ();
        si ( ! membre) renvoie le  message . réponse ( ' Commande Invalide, il faut mettre `! ban @ User # 1234` ' );
          membre . ban ({
            jours : args [ 1 ] ||  null ,
            raison :  ` Banni par $ { message . auteur . tag } `
          });
      }
    // }
}