```
setTimeout(function() {
			var url_adress = window.location.href;
			var res = url_adress.split("/");
			var sonuc
			var tab_deger = res[4];
			if(res.length == 4){
				sonuc = '4';
				$("a[data-tab='material']").trigger('click');

			}
			else if(res.length == 5){
				if (tab_deger == 'material'){
          console.log('material: '+url_adress);
					$("a[data-tab='material']").trigger('click');
					}
				else if(tab_deger == 'people'){
          console.log('people: '+url_adress);
          $("a[data-tab='people']").trigger('click');
						}
				else if(tab_deger == 'missing'){
          console.log('missing:'+url_adress);
          $("a[data-tab='missing']").trigger('click');
					}
				}
			else{
				sonuc = res.length;
			}


		},1000);
```
