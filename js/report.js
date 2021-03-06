$(document).ready(function(){
	$('#btnAffectedPopulation').click(function(){
		
		var preMonitorCity = localStorage.getItem('datacity');
					
			
			$("#divCity").append('<p>'+'Enter barangay for '+'<strong>'+preMonitorCity+'</strong>'+'</p>');
	});
	
	$('#btnSubmitInitialDisasterIncident').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_initd_city').val(preMonitorCity);	

			var typhoon = localStorage.getItem('datatyphoon');
			$('#txt_initd_typhoon').val(typhoon);
			
			var frmInitialDisasterIncident= $("#frmInitialDisasterIncident");
			$.mobile.loading("show");
				$.ajax({
						url: 'http://iligtas.ph/listo/mobile/add_initialdisaster.php',			
					type: 'POST',
					data: frmInitialDisasterIncident.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmit" ).popup();
						$( "#popupAfterReportDataSubmit" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert("Server problem please try again later.Thank you ");
					}
				});	
	});
	
	function loading(showOrHide) {
    setTimeout(function(){
        $.mobile.loading(showOrHide);
    }, 1); 
}
	
	$('#btnInitialDisasterProgress').click(function(){
		loading("show");
			var preMonitorCity = localStorage.getItem('datausername');
					$('#txtGetUsername').val(preMonitorCity);
			var frmGetUsername= $("#frmGetUsername");
			$.getJSON("http://iligtas.ph/listo/mobile/display_initialdisaster_progress.php", frmGetUsername.serialize(), function(data)
         		{
			
			 $.each(data, function(key, value) {
			$("#divrptInitialDisasterProgress").append('<p>'+'<strong>'+'Date posted : '+'</strong>'+value['timestamp']+'</p>'+'<p>'+'<strong>'+'Subject : '+'</strong>'+value['subject']+'</p>'+'<p>'+'<strong>'+'Incident: '+'</strong>'+value['incident']+'</p>'+'<p>'+'<strong>'+'Location: '+'</strong>'+value['where']+'</p>'+'<hr/>');					
			});	
		loading("hide");
	});
		
		
	});
	
		$('#btnSubmitAffectedPopulation').click(function(){
			
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_affected_city').val(preMonitorCity);		
			
			var typhoon = localStorage.getItem('datatyphoon');
			$('#txt_affected_typhoon').val(typhoon);
			
			var frmAffectedPopulation= $("#frmAffectedPopulation");
			$("#divCity").append('<p>'+preMonitorCity+'</p>');
			$.mobile.loading("show");
				$.ajax({
				url: 'http://iligtas.ph/listo/mobile/add_affectedpopulation.php',					
					type: 'POST',
					data: frmAffectedPopulation.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextAffectedPopulationSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterAffectedPopulationSubmit" ).popup();
						$( "#popupAfterAffectedPopulationSubmit" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert("Server problem please try again later.Thank you ");
					}
				});	
		});
	
	
});
