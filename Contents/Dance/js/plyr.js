   var x = document.getElementById("myAudio"); 
    var index = 0;
     npAction = $('#npAction');
        npTitle = $('#npTitle');
        audio = $('#myAudio');
          trackCount = tracks.length;

      function playAudio(id) { 
        //  x.play(); 
        index = 0;
        playTrack(index);
        DanceStart();
      } 

      function stopAudio() { 
          x.pause();
          DanceStop();
      } 

        function preplayAudio() {
           
              if ((index - 1) > -1) {
                            index--;
                            loadTrack(index);
                            var x = document.getElementById("myAudio"); 
                            x.play()
                        } else {
                             index = 0;
                             loadTrack(index);
                            var x = document.getElementById("myAudio"); 
                            x.play();
                              $('.playAudio').hide()
                        $('.stopAudio').show()
                        npAction.text('Now Playing...');                           
                            
                        }
              }

                function nextplayAudio() {
                   //alert(index);
                     // if ((index + 1) < trackCount) {
                         if ((index > 0) ){
                        index++;

                        //alert(index);
                        loadTrack(index);
                       var x = document.getElementById("myAudio"); 
                       x.play()                      
                        $('.playAudio').hide()
                        $('.stopAudio').show()
                        npAction.text('Now Playing...');
                      
                    } else {
                        index = 0;
                        loadTrack(index);
                        var x = document.getElementById("myAudio"); 
                        x.play();
                        $('.stopAudio').hide()
                        $('.playAudio').show()
                        npAction.text('Paused...');
                        
                        
                    }
                }

 
 



      $(function(){
       
   console.log(audio); 

        $('.stopAudio').hide()
        $('.playAudio').click(function(){
            $('.playAudio').hide()
             $('.stopAudio').show()
             npAction.text('Now Playing...');
           
        })
        $('.stopAudio').click(function(){
            $('.stopAudio').hide()
            $('.playAudio').show()
             npAction.text('Paused...');
        })
    })

            mediaPath = 'tracks/';
            extension = '.mp3';
       tracks = [{
                "track": 1,
                "name": "Robot Pop Dance",
                "duration": "",
                "file": "01"
            }, {
                "track": 2,
                "name": "Robot Country Dance",
                "duration": "",
                "file": "02"
            }
           // {
           //      "track": 3,
           //      "name": "The Forsaken (Take 2) ",
           //      "duration": "8:36",
           //      "file": "03"
           //  },
           //   {
           //      "track": 3,
           //      "name": "The Forsaken (Take 2) ",
           //      "duration": "8:36",
           //      "file": "03"
           //  },
           //   {
           //      "track": 3,
           //      "name": "The Forsaken (Take 2) ",
           //      "duration": "8:36",
           //      "file": "03"
           //  }



            ];


 buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><span class="plNum">' + trackNumber + '.</span><span class="plTitle">' + trackName + '</span><span class="plLength">' + trackDuration + '</span></div></li>');
            });

             li = $('#plList li').on('click', function () {
                            var id = parseInt($(this).index());

                            if (id !== index) {
                             //    alert(id);
                               playTrack(id);
                                  //x.play(); 
                            $('.playAudio').hide()
                            $('.stopAudio').show()
                            npAction.text('Now Playing...');
                            }    

                        });

        loadTrack = function (id) {
           // alert(id);  
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);

                index = id;               
               var  sourceUrl = mediaPath + tracks[id].file + extension;
                //$("#ogg_src").attr("src", sourceUrl);
                audio.attr("src", sourceUrl);

               // console.log( audio.src ); 
                
            };

             playTrack = function (id) {
                loadTrack(id);
                var x = document.getElementById("myAudio"); 
                x.play(); 
              
            };


            console.log(tracks);