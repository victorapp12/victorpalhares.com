app.factory('dtProjetos',['$rootScope', function ($rootScope) {
  var dados = {
      "projects":[
        {
          name: 'Ana Claudia Lyon',
          dt: '2014',
          agency: 'Ahab Mobile Freaks',
          category: 'Web',
          description: 'Website desenvolvido para a dermatologista Ana Lyon',
          media:{
            thumb: 'assets/img/anaLyon/thumb.jpg',
            skin: 'assets/img/anaLyon/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }
        ,
        {
          name: 'Ahab Mobile Freaks',
          dt: '2015',
          agency: 'Ahab Mobile Freaks',
          category: 'Web',
          description: 'Website da agência Ahab Mobile Freaks.',
          media:{
            thumb: 'assets/img/ahab/thumb.jpg',
            skin: 'assets/img/ahab/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: "http://www.ahab.com.br"
          }
        }
        ,
        {
          name: 'Mauricio Ferraresi',
          dt: '2015',
          agency: 'Ahab Mobile Freaks',
          category: 'Web',
          description: 'Website Mauricio Ferraresi',
          media:{
            thumb: 'assets/img/mauricioFerraresi/thumb.jpg',
            skin: 'assets/img/mauricioFerraresi/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: "http://www.mauricioferraresi.com.br"
          }
        }
        ,
        {
          name: 'Go Baby`s',
          dt: '2015',
          agency: 'Ahab Mobile Freaks',
          category: 'Web',
          description: 'Website Go baby`s',
          media:{
            thumb: 'assets/img/goBabys/thumb.jpg',
            skin: 'assets/img/goBabys/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: "http://www.gobabys.com.br"
          }
        }
        ,
        {
          name: 'Via Lubrificantes',
          dt: '2014',
          agency: 'Ahab Mobile Freaks',
          category: 'Web',
          description: 'Website Via Lubrificantes',
          media:{
            thumb: 'assets/img/viaLubrificantes/thumb.jpg',
            skin: 'assets/img/viaLubrificantes/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: "http://www.vialubrificantes.com.br"
          }
        }
        ,
        {
          name: 'Miss Limpeza',
          dt: '2014',
          agency: 'Ahab Mobile Freaks',
          category: 'App',
          description: 'Aplicativo Miss Limpeza',
          media:{
            thumb: 'assets/img/missLimpeza/thumb.jpg',
            skin: 'assets/img/missLimpeza/skin.jpg'
          },
          links:{
            googlePlay: "https://play.google.com/store/apps/details?id=br.com.misslimpeza",
            appStore: "https://itunes.apple.com/us/app/miss-limpeza/id965234111?mt=8",
            webSite: "https://www.misslimpeza.com.br/"
          }
        }
        ,
        {
          name: 'Havoline',
          dt: '2014',
          agency: 'Ahab Mobile Freaks',
          category: 'App',
          description: 'Aplicativo Texaco Havoline',
          media:{
            thumb: 'assets/img/havoline/thumb.jpg',
            skin: 'assets/img/havoline/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: "https://itunes.apple.com/br/app/id917634281",
            webSite: null
          }
        }
        ,
        {
          name: 'Via Lubrificantes',
          dt: '2014',
          agency: 'Ahab Mobile Freaks',
          category: 'App',
          description: 'Aplicativo Via Lubrificantes',
          media:{
            thumb: 'assets/img/appVia/thumb.jpg',
            skin: 'assets/img/appVia/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }
        ,
        {
          name: 'Iluminar',
          dt: '2013',
          agency: 'AD2 Editora',
          category: 'App',
          description: 'Aplicativo Iluminar',
          media:{
            thumb: 'assets/img/iluminar/thumb.jpg',
            skin: 'assets/img/iluminar/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }
        ,
        {
          name: 'Grupo Orguel',
          dt: '2013',
          agency: 'AD2 Editora',
          category: 'App',
          description: 'Aplicativo do Grupo Orguel',
          media:{
            thumb: 'assets/img/orguel/thumb.jpg',
            skin: 'assets/img/orguel/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }
        ,
        {
          name: 'Revista Ponteio',
          dt: '2013',
          agency: 'AD2 Editora',
          category: 'App',
          description: 'Aplicativo para iPad da Revista digital do Ponteio Lar Shopping',
          media:{
            thumb: 'assets/img/ponteio/thumb.jpg',
            skin: 'assets/img/ponteio/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }
        ,
        {
          name: 'Cafegrafia',
          dt: '2015',
          agency: 'Freelancer',
          category: 'Web',
          description: 'Layout/Website Cafegrafia',
          media:{
            thumb: 'assets/img/cafegrafia/thumb.jpg',
            skin: 'assets/img/cafegrafia/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: "http://www.cafegrafia.com.br"
          }
        }
        ,
        {
          name: 'Dioniso',
          dt: '2015',
          agency: 'Za9',
          category: 'App',
          description: 'Aplicativo Dioniso para iPhone e Android',
          media:{
            thumb: 'assets/img/dioniso/thumb.jpg',
            skin: 'assets/img/dioniso/skin.jpg'
          },
          links:{
            googlePlay: null,
            appStore: null,
            webSite: null
          }
        }


      ]
    };

  return dados;
}]);
