<template>
  <div class="information-grid">
    <div class="information-block">
      <h2>About</h2>
      <p>A compassionate, creative designer with 6 years of experience looking to join a team that takes an collaborative, multidisciplinary approach to architecture and design.
      </p>
    </div>
    <div class="information-block">
      <h2>Education</h2>
      <p>M.Arch<br>
        University of Calgary (2017)</p>
      <p>B.A. Urban Studies<br>
        Minor in Architecture<br>
        University of Calgary (2015)
      </p>
    </div>
    <div class="information-block">
      <h2>Employment</h2>
      <p>Simon Montgomery Studio<br>
	Intermediate Designer (2021-Present)</p>
	<p>SPECTACLE Bureau for Architecture + Urbanism<br>
	Intern Architect (2020-2021)</p>
	<p>Modern Office of Design + Architecture (MoDA)<br>
	Intern Architect (2016-2020)</p>
    </div>
	<div class="information-block">
      <h2>Volunteering</h2>
      <p>Architects Against Housing Alienation (AAHA)<br>
	Volunteer (2023-Present)
	</p>
	<p>Architecture Foundation of british Columbia (AFBC)<br>
	Volunteer (2023-Present)
	</p>
	<p>Look Forward Calgary<br>
	Research and Data Committee (2019-2021)
	</p>
	<p>EVDS Students Assocation<br>
	Community Relations Chair (2016-2017)
	</p>
	<p>Calgary Folk Fest<br>
	Side Stage Setup Coordinator (2016-2021)
	</p>
	<p>Bike Calgary<br>
	Advocacy Committee (2011-2014)
	</p>
    </div>
      <div class="information-block">
      <h2>Publications</h2>
      <p>Western Living: "Architectural Designer of the Year"<br>
      	Simon Montgomery Stuidio (2023)<br>
	      <br>
	Wallpaper: “This forest retreat in BC offers architectural shelter”<br>
	Simon Montgomery Stuidio (2023)<br>
	      <br>
	Dwell: “The Pool Was a Priority. So They Dove Into the Details”<br>
      	Simon Montgomery Stuidio: East Van Residence (2023)<br>
	      <br>
	Archinect: “Winning Designs of the 2020 Warming Huts Competition in Winnipeg”<br>
	MoDA: Shovel Warming Hut Installation (2020)<br>
	      <br>
	CBC: “Warming hut winners include river beast, forest village and ‘swirling vortex of mystery”<br>
	MoDA: Shovel Warming Hut Installation (2020)<br>
	      <br>
	Canadian Architect Magazine - December Issue<br>
	MoDA: GROW (2017)<br>
	      <br>
	Archdaily: “MoDA’s Attabotics Headquarters is Inspired by Ant Colonies“<br>
	MoDA: Attabotics headquarters (2020)<br>
	      <br>
	Archdaily: “The Livery Shop / Modern Office of Design + Architecture”<br>
	MoDA: The Livery Shop (2019)<br>
	      <br>
	Jason S. Johnson: Digital Design Exercises for Architecture Students<br>
	Content Contributor (2017)<br>
	      <br>
	Canadian Architect Magazine - December Issue<br>
	MoDA: Emerging Talent (2016)<br>
	      <br>
	MARK Magazine - Issue 71<br>
	MoDA: Village (2017)<br>
	</p>
    </div>
    <div class="information-block">
      <h2>Academic Awards</h2>
      <p>2017 Faculty of Environmental Design - Honour Roll<br><br>
	2017 Canadian Architect Student Award of Excellence - Finalist<br><br>
	2016 Richard R. Singleton Architecture Bursary<br><br>
	2016 GEC Award of Comprehensive Design Excellence<br><br>
	2016 Murray W. Waterman Award<br><br>
	2016 EVDS Alumni Scholarship<br><br>
	2016 Shirley Bird Memorial Award<br><br>
	2015 Queen Elizabeth II Graduate Scholarship<br><br>
	2015 Alberta Graduate Student Award<br><br>
    <div class="information-block">
      <h2>Professional Awards</h2>
      <p>2023 Western Living Architectural Designer of the Year<br>
	Simon Montgomery Studio<br>
	      <br>
	2022 Arthur Erickson Award for Emerging Designer (Finalist)<br>
      	Simon Montgomery Studio<br>
	      <br>
	2021 Canadian Architect Award of Merit<br>
      	MoDA: Edmonton Food Hub<br>
	      <br> 
	2020 Canadian Archtiect Award of Excellence<br>
      	MoDA: Calgary Japanese Community Centre<br>
	      <br>
	2019 Canadian Architect Award of Excellencebr>
	MoDA: Attbotics Headquarters<br>      
	      <br>
	2019 World Architecture Festival Category Winner - Office<br>
      	MoDA: Attabotics Headquarters<br>
	      <br>
	2019 World Architecture Festival Finalist - Future Office<br>
      	MoDA: Attabotics Office Interiors<br>
	      <br>
	2019 World Architecture Festival Finalist - Residential<br>
      	MoDA: Gallery House<br> 
	      <br>
	2019 Mayor's Urban Design Awards - Office<br>
	MoDA: Attabotics Headquarters<br>
	      <br>
	2019 Mayor's Urban Design Awards<br>
      	MoDA: The Livery Shop<br>
	      <br>
	2019 Architizer A+ Award Finalist<br>
      	MoDA: Attabotis Headquarters<br> 
	      <br>
	2018 World Architecture Festival Finalist - Residential<br>
      	MoDA: Lakeview Residence<br>
	      <br>
	2018 AZ Awards Finalist - Multifamily<br>
      	MoDA: GROW Multifamily<br>
	      <br>
	2017 Canadian Architect Award of Merit<br>
      	MoDA: GROW Multifamily<br>
	      <br>
	2017 Mayor's Urban Desgin Award - Residential<br>
	MoDA: GROW Multifamily <br>
	      <br>
	2017 Mayor's Urban Desgin Award - Residential<br>
	MoDA: Village Multifamily<br>
	      <br>
	2017 AIA American Architecture Prize<br>
	MoDA: GROW Multifamily<br>
	      <br>
	2017 Arthur Erickson Award for Emerging Designer<br>
	MoDA<br>
	      <br>
	2017 Architizer A+ Award - Miltifamily<br>
	MoDA: Village Multifamily<br>
	      <br>
	2017 120 Hours Competition - Honorable Mention
	</p>
    </div>
  </div>
</template>

<style scoped>
.information-grid {
  display: grid;
  gap: var(--spacing-md);
}

h2 {
	border-bottom: var(--spacing-xs) solid var(--color-text);
}

@media (min-width: 1000px) {
	.information-grid {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: masonry;
  }
}

</style>
