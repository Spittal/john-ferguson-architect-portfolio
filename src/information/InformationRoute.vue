<template>
  <div class="information-grid">
    <div class="information-block">
      <h2>About</h2>
      <p>A compassionate, creative architectural designer looking to join a collaborative team that takes an iterative, multidisciplinary approach to architecture and design. 
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
      <h2>Employment History</h2>
      <p>Simon Montgomery Studio<br>
				Intermediate Designer (2021-Present)</p>
			<p>SPECTACLE Bureau for Architecture + Urbanism<br>
				Intern Architect (2020-2021)</p>>
			<p>Modern Office of Design + Architecture (MoDA)<br>
				Intern Architect (2016-2020)</p>
    </div>
    <div class="information-block">
      <h2>Awards</h2>
      <p>SMSTUDIO: 2023 Western Living Architectural Designer of the Year<br>
				SMSTUDIO: 2022 Arthur Erickson Award for Emerging Designer (Finalist)<br>
				MoDA: 2021 Canadian Architect Award of Merit (Food Hub)<br>
				MoDA: 2020 Canadian Archtiect Award of Excellence - Calgary Japanese Community Centre<br>
				MoDA: 2019 Canadian Architect Award of Excellence - Attabotics HQ<br>
				MoDA: 2019 World Architecture Festival Category Winner - Attabotics HQ<br>
				MoDA: 2019 Mayor's Urban Design Award - Attabotics HQ<br>
				MoDA: 2019 Mayor's Urban Design Award Finalist - Switchbloc<br>
				MoDA: 2019 Mayor's Urban Design Award - Livery Shop<br>
				MoDA: 2019 World Architecture Festival Finalist - Attabotics Office<br>
				MoDA: 2019 World Architecture Festival Finalist - Gallery House<br>
				MoDA: 2019 Architizer A+ Award Finalist - Attabotics HQ<br>
				MoDA: 2018 World Architecture Festival Finalist - Lakeview Residence<br>
				MoDA: 2018 AZ Awards Finalist - GROW<br>
				MoDA: 2017 Canadian Architect Award of Merit - GROW<br>
				MoDA: 2017 Mayor's Urban Desgin Award - GROW<br>
				MoDA: 2017 Mayor's Urban Desgin Award - Village<br>
				MoDA: 2017 AIA American Architecture Prize - GROW<br>
				MoDA: 2017 Arthur Erickson Award for Emerging Designer<br>
				MoDA: 2017 Architizer A+ Award - Village<br>
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
  }
}

@media (min-width: 1800px) {
  .information-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 2200px) {
  .information-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
