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
				Role (2023-Present)
			</p>
			<p>Architecture Foundation of british Columbia (AFBC)<br>
				Role (2023-Present)
			</p>
			<p>Look Forward Calgary<br>
				Research & Data Committee (2019-2021)
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
      <p>Western Living: "Architectural Designer of the Year 2023" (SMSTUDIO)<br>
	Wallpaper: “This forest retreat in BC offers architectural shelter”<br>
	Dwell: “East Van Residence, SMSTUDIO”<br>
	Archinect: “Winning Designs of the 2020 Warming Huts Competition in Winnipeg”<br>
	CBC: “Warming hut winners include river beast, forest village and ‘swirling vortex of mystery”<br>
	Canadian Architect Magazine - October Issue (MoDA)<br>
	Archdaily: “MoDA’s Attabotics Headquarters is Inspired by Ant Colonies“<br>
	Archdaily: “The Livery Shop / Modern Office of Design + Architecture”<br>
	Jason S. Johnson: Digital Design Exercises for Architecture Students - Contributor<br>
	Canadian Architect Magazine - December Issue (MoDA)<br>
	MARK Magazine - Issue 71 (Village)</p><br>
    </div>
    <div class="information-block">
      <h2>Awards</h2>
      <p>SMSTUDIO: 2023 Western Living Architectural Designer of the Year<br>
	SMSTUDIO: 2022 Arthur Erickson Award for Emerging Designer (Finalist)<br><br>
	MoDA: 2021 Canadian Architect Award of Merit (Food Hub)<br><br>
	MoDA: 2020 Canadian Archtiect Award of Excellence - Calgary Japanese Community Centre<br><br>
	MoDA: 2019 Canadian Architect Award of Excellence - Attabotics HQ<br><br>
	MoDA: 2019 World Architecture Festival Category Winner - Attabotics HQ<br><br>
	MoDA: 2019 Mayor's Urban Design Award - Attabotics HQ<br><br>
	MoDA: 2019 Mayor's Urban Design Award Finalist - Switchbloc<br><br>
	MoDA: 2019 Mayor's Urban Design Award - Livery Shop<br><br>
	MoDA: 2019 World Architecture Festival Finalist - Attabotics Office<br><br>
	MoDA: 2019 World Architecture Festival Finalist - Gallery House<br><br>
	MoDA: 2019 Architizer A+ Award Finalist - Attabotics HQ<br><br>
	MoDA: 2018 World Architecture Festival Finalist - Lakeview Residence<br><br>
	MoDA: 2018 AZ Awards Finalist - GROW<br><br>
	MoDA: 2017 Canadian Architect Award of Merit - GROW<br><br>
	MoDA: 2017 Mayor's Urban Desgin Award - GROW<br><br>
	MoDA: 2017 Mayor's Urban Desgin Award - Village<br><br>
	MoDA: 2017 AIA American Architecture Prize - GROW<br><br>
	MoDA: 2017 Arthur Erickson Award for Emerging Designer<br><br>
	MoDA: 2017 Architizer A+ Award - Village<br><br>
	Student: 2017 120 Hours Competition - Honorable Mention
	Student: 2017 Faculty of Environmental Design - Honour Roll
	Student: 2017 Canadian Architect Student Award of Excellence - Finalist
	Student: 2016 Richard R. Singleton Architecture Bursary
	Student: 2016 GEC Award of Comprehensive Design Excellence
	Student: 2016 Murray W. Waterman Award
	Student: 2016 EVDS Alumni Scholarship
	Student: 2016 Shirley Bird Memorial Award
	Student: 2015 Queen Elizabeth II Graduate Scholarship
	Student: 2015 Alberta Graduate Student Award
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
