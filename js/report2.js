$(document).ready(function(){

	$('#btnSubmitCasualtiesDead').click(function(){
			var preMonitorCity2 = localStorage.getItem('datausername');
					$('#txt_casd_city').val(preMonitorCity2);
			var frmCasualtiesDead= $("#frmCasualtiesDead");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_casualtiesdead.php',						
					type: 'POST',
					data: frmCasualtiesDead.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitDead").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitDead" ).popup();
						$( "#popupAfterReportDataSubmitDead" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		
		
		$('#btnSubmitCasualtiesInjured').click(function(){
			var preMonitorCity3 = localStorage.getItem('datausername');
			$('#txt_casi_city').val(preMonitorCity3);
			var frmCasualtiesInjured= $("#frmCasualtiesInjured");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_casualtiesinjured.php',						
					type: 'POST',
					data: frmCasualtiesInjured.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitInjured").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitInjured" ).popup();
						$( "#popupAfterReportDataSubmitInjured" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		
		$('#btnSubmitCasualtiesMissing').click(function(){
			var preMonitorCity4 = localStorage.getItem('datausername');
			$('#txt_casm_city').val(preMonitorCity4);
			var frmCasualtiesMissing= $("#frmCasualtiesMissing");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_casualtiesmissing.php',						
					type: 'POST',
					data: frmCasualtiesMissing.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitMissing").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitMissing" ).popup();
						$( "#popupAfterReportDataSubmitMissing" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		
		$('#btnSubmitLifelineStatusRoad').click(function(){
			var preMonitorCityRoad = localStorage.getItem('datausername');
			$('#txt_statusroad_city').val(preMonitorCityRoad);
			var frmLifelineStatusRoad= $("#frmLifelineStatusRoad");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_lifelinestatus_road.php',						
					type: 'POST',
					data: frmLifelineStatusRoad.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitRoad").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitRoad" ).popup();
						$( "#popupAfterReportDataSubmitRoad" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitLifelineStatusComm').click(function(){
			var preMonitorCityComm = localStorage.getItem('datausername');
			$('#txt_statusComm_city').val(preMonitorCityComm);
			var frmLifelineStatusComm= $("#frmLifelineStatusComm");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_lifelinestatus_comm.php',						
					type: 'POST',
					data: frmLifelineStatusComm.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitComm").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitComm" ).popup();
						$( "#popupAfterReportDataSubmitComm" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitLifelineStatusPower').click(function(){
			var preMonitorCityPower = localStorage.getItem('datausername');
			$('#txt_statusPower_city').val(preMonitorCityPower);
			var frmLifelineStatusPower= $("#frmLifelineStatusPower");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_lifelinestatus_power.php',						
					type: 'POST',
					data: frmLifelineStatusPower.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitPower").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitPower" ).popup();
						$( "#popupAfterReportDataSubmitPower" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitCancellationPre').click(function(){
			var preMonitorCityPower = localStorage.getItem('datausername');
			$('#txt_cancelPre_city').val(preMonitorCityPower);
			var frmCancellationPre= $("#frmCancellationPre");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_cancellation.php',						
					type: 'POST',
					data: frmCancellationPre.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitCancellationPre").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitCancellationPre" ).popup();
						$( "#popupAfterReportDataSubmitCancellationPre" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitCancellationElem').click(function(){
			var preMonitorCityPower = localStorage.getItem('datausername');
			$('#txt_cancelElem_city').val(preMonitorCityPower);
			var frmCancellationElem= $("#frmCancellationElem");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_cancellation.php',	
					type: 'POST',
					data: frmCancellationElem.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitCancellationPre").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitCancellationPre" ).popup();
						$( "#popupAfterReportDataSubmitCancellationPre" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitCancellationSec').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_cancelSec_city').val(preMonitorCity);
			var frmCancellationSec= $("#frmCancellationSec");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_cancellation.php',							
					type: 'POST',
					data: frmCancellationSec.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitCancellationSec").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitCancellationSec" ).popup();
						$( "#popupAfterReportDataSubmitCancellationSec" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitCancellationTer').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_cancelTer_city').val(preMonitorCity);
			var frmCancellationTer= $("#frmCancellationTer");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_cancellation.php',							
					type: 'POST',
					data: frmCancellationTer.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitCancellationTer").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitCancellationTer" ).popup();
						$( "#popupAfterReportDataSubmitCancellationTer" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		$('#btnSubmitCancellationGov').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_cancelGov_city').val(preMonitorCity);
			var frmCancellationGov= $("#frmCancellationGov");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_cancellation.php',							
					type: 'POST',
					data: frmCancellationGov.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitCancellationGov").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitCancellationGov" ).popup();
						$( "#popupAfterReportDataSubmitCancellationGov" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});
		
		
		$('#btnSubmitStateCalamity').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
			$('#txt_calamity_city').val(preMonitorCity);
			var frmCalamity= $("#frmCalamity");
			$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_declareSC.php',							
					type: 'POST',
					data: frmCalamity.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmitStateCalamity").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmitStateCalamity" ).popup();
						$( "#popupAfterReportDataSubmitStateCalamity" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
		});

	
	
});
