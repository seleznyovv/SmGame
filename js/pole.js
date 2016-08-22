(function(){
    var codes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], i, j, x, y; 
    for(y = codes.length; y;){j = Math.floor(Math.random() * y);x = codes[--y];codes[y] = codes[j];codes[j] = x;}
    for(j = 0; j < 16; j++) document.getElementById('pole').innerHTML += '<a color="' + codes[j] + '" class="color' + codes[j] + ' hidden">&nbsp;</a>';
    var check = false, selcolor = 0, sela, steps = 0, open = 0, timer, a = document.getElementsByTagName('a');
    for(var i = 0; i < a.length; i++){
        a[i].addEventListener('click', function(e){
            var el = e.target;
            if(el.className.indexOf('hidden') > -1){
                steps++;
                el.className = el.className.replace('hidden', '');
                setTimeout(function(){
                    if(check){
                        check = false;
                        if(el.getAttribute('color') == selcolor){
                            open++;
                            if(open == 8) alert('WIIIN! Steps: ' + steps);
                        }
                        else{
                            sela.className += ' hidden'; el.className += ' hidden';
                        }
                    }
                    else{
                        selcolor = el.getAttribute('color'); sela = el; check = true;
                    }
                }, 100);
            }
        });
    }
})();