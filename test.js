
    var cmd=require('node-cmd');
 
    cmd.get(
        'pwd',
        function(err, data, stderr){
            console.log('the current working dir is : ',data)
        }
    );
 
    cmd.run('touch example.created.file');
 
    cmd.get(
        'ls',
        function(err, data, stderr){
            console.log('the current dir contains these files :\n\n',data)
        }
    );
 
    cmd.get(
        `
            git clone https://github.com/RIAEvangelist/node-cmd.git
            cd node-cmd
            ls
        `,
        function(err, data, stderr){
            if (!err) {
               console.log('the node-cmd cloned dir contains these files :\n\n',data)
            } else {
               console.log('error', err)
            }
 
        }
    );