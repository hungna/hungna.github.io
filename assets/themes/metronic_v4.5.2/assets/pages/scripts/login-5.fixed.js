var Login = function() {

    var handleLogin = function() {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "Username is required."
                },
                password: {
                    required: "Password is required."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                form.submit(); // form validation success, call ajax form submit
            }
        });

        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });

        $('.forget-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        $('#forget-password').click(function(){
            $('.login-form').hide();
            $('.forget-form').show();
        });

        $('#back-btn').click(function(){
            $('.login-form').show();
            $('.forget-form').hide();
        });
    }

 
  

    return {
        //main function to initiate the module
        init: function() {

            handleLogin();

            // init background slide images
            $('.login-bg').backstretch([
                    "http://farm8.staticflickr.com/7617/26811798836_a9e2a5ff2c_o.jpg",
                    "http://farm8.staticflickr.com/7606/26751982092_3b7ef4beaf_o.jpg",
                    "http://farm8.staticflickr.com/7190/26240391334_172720e38e_o.jpg",
                    "http://farm8.staticflickr.com/7318/26240393454_a9e690c7ae_o.jpg",
                    "http://farm8.staticflickr.com/7748/26573092240_7eb5a792cc_o.jpg"
                    // "http://farm8.staticflickr.com/7306/26778446921_41ca781391_o.jpg",
                    // "http://farm8.staticflickr.com/7028/26778450491_9cffd0d323_o.jpg",
                    // "http://farm8.staticflickr.com/7519/26751991602_684459c921_o.jpg",
                    // "http://farm8.staticflickr.com/7233/26573095400_8147e739bb_o.jpg",
                    // "http://farm8.staticflickr.com/7207/26778458081_c1479759f3_o.jpg",
                    // "http://farm8.staticflickr.com/7103/26778460271_7111abf617_o.jpg",
                    // "http://farm8.staticflickr.com/7316/26240406474_1dee650859_o.jpg",
                    // "http://farm8.staticflickr.com/7030/26778463871_4b05999e75_o.jpg",
                    // "http://farm8.staticflickr.com/7436/26241377863_3772530e76_o.jpg",
                    // "http://farm8.staticflickr.com/7727/26573099660_e2b2431f7e_o.jpg",
                    // "http://farm8.staticflickr.com/7706/26240410234_1941c0cfe4_o.jpg",
                    // "http://farm8.staticflickr.com/7273/26241384513_f565cd6c6d_o.jpg",
                    // "http://farm8.staticflickr.com/7664/26241388373_b37b2de06b_o.jpg",
                    // "http://farm8.staticflickr.com/7499/26778474751_df387e7794_o.jpg",
                    // "http://farm8.staticflickr.com/7662/26752003382_446dd565d4_o.jpg",
                    // "http://farm8.staticflickr.com/7671/26778478231_0cb63bb1ec_o.jpg",
                    // "http://farm8.staticflickr.com/7427/26241398093_541f4ff523_o.jpg",
                    // "http://farm8.staticflickr.com/7282/26241399573_cb6778b1a2_o.jpg",
                    // "http://farm8.staticflickr.com/7044/26240421574_1d05fb038f_o.jpg",
                    // "http://farm8.staticflickr.com/7728/26752008132_d2581cebf9_o.jpg",
                    // "http://farm8.staticflickr.com/7624/26241404563_99536c484e_o.jpg",
                    // "http://farm8.staticflickr.com/7386/26573110010_346477431e_o.jpg",
                    // "http://farm8.staticflickr.com/7535/26778487831_89ee06f6a7_o.jpg",
                    // "http://farm8.staticflickr.com/7796/26573112640_62b7d84d75_o.jpg",
                    // "http://farm8.staticflickr.com/7248/26752014582_4a9617614b_o.jpg",
                    // "http://farm8.staticflickr.com/7256/26811835326_512a05dbe8_o.jpg",
                    // "http://farm8.staticflickr.com/7364/26752016272_1733699e48_o.jpg",
                    // "http://farm8.staticflickr.com/7218/26778496891_bc0b96c09d_o.jpg",
                    // "http://farm8.staticflickr.com/7675/26811843896_85f8a17980_o.jpg",
                    // "http://farm8.staticflickr.com/7122/26811845406_1f2c9f1321_o.jpg",
                    // "http://farm8.staticflickr.com/7494/26811847266_42167caa7d_o.jpg",
                    // "http://farm8.staticflickr.com/7623/26240447804_1dd89a4583_o.jpg",
                    // "http://farm8.staticflickr.com/7459/26241425593_f399d01a83_o.jpg",
                    // "http://farm8.staticflickr.com/7753/26811853496_df003003b1_o.jpg",
                    // "http://farm8.staticflickr.com/7368/26811855396_c7126464ae_o.jpg",
                    // "http://farm8.staticflickr.com/7480/26811857466_059cc7ac95_o.jpg",
                    // "http://farm8.staticflickr.com/7278/26752025292_4057ccf236_o.jpg",
                    // "http://farm8.staticflickr.com/7474/26845979365_e55cea94d8_o.jpg",
                    // "http://farm8.staticflickr.com/7632/26241434163_660463983b_o.jpg",
                    // "http://farm8.staticflickr.com/7354/26811865046_652101f483_o.jpg",
                    // "http://farm8.staticflickr.com/7539/26811866906_68eb887384_o.jpg",
                    // "http://farm8.staticflickr.com/7421/26573130130_d1fe67f145_o.jpg",
                    // "http://farm8.staticflickr.com/7536/26241440613_e410782cac_o.jpg",
                    // "http://farm8.staticflickr.com/7197/26573133120_d3cd489a3f_o.jpg",
                    // "http://farm8.staticflickr.com/7435/26241443673_60e5a8de1f_o.jpg",
                    // "http://farm8.staticflickr.com/7685/26845987325_4654aa01ce_o.jpg",
                    // "http://farm8.staticflickr.com/7131/26752035072_60f87722b7_o.jpg",
                    // "http://farm8.staticflickr.com/7666/26240461894_9a755a0b07_o.jpg",
                    // "http://farm8.staticflickr.com/7407/26240462534_1115826155_o.jpg",
                    // "http://farm8.staticflickr.com/7680/26573146510_f1c8964b6f_o.jpg",
                    // "http://farm8.staticflickr.com/7181/26573148820_7b89e83252_o.jpg",
                    // "http://farm8.staticflickr.com/7527/26240464994_d7e52b691f_o.jpg",
                    // "http://farm8.staticflickr.com/7413/26846000325_19788653fb_o.jpg",
                    // "http://farm8.staticflickr.com/7181/26846002245_1bcd62745c_o.jpg",
                    // "http://farm8.staticflickr.com/7305/26240468764_5f69415a16_o.jpg"
                ], {
                  fade: 1000,
                  duration: 8000
                }
            );

            $('.forget-form').hide();

        }

    };

}();

jQuery(document).ready(function() {
    Login.init();
});