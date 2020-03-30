---
title: Maoshlar
date: 2020-03-11T16:19:24+05:00
translationKey: "salaries"
---

2020-yil fevral oyidagi [soʻrovnoma](/uz/salary-report/2020-02/) boʻyicha maoshlar. Vikipediyada [kvartil](https://en.wikipedia.org/wiki/Quartile) va [mediana](https://en.wikipedia.org/wiki/Median) haqida.

<div id="app" class="row">
  <div class="col-4">
    <form :disabled="isFormDisabled == true">
      <div class="form-group">
        <label for="position">Lavozim</label>
        <select class="form-control" id="position" :disabled="isFormDisabled == true" v-model="selectedPosition">
          <option value="">-</option>
          <option value="Automation Engineer">Automation Engineer</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="CIO">CIO</option>
          <option value="CTO, Director of Engineering">CTO, Director of Engineering</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Database Administrator">Database Administrator</option>
          <option value="Designer">Designer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="ERP/CRM">ERP/CRM</option>
          <option value="Hardware Engineer">Hardware Engineer</option>
          <option value="Network Engineer">Network Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Project Manager">Project Manager</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="System Administrator">System Administrator</option>
          <option value="System Architect">System Architect</option>
          <option value="Team Lead">Team Lead</option>
        </select>
      </div>
      <div class="form-group">
        <label for="level">Daraja</label>
        <select class="form-control" id="level" :disabled="isLevelDisabled == true || isFormDisabled == true" v-model="selectedLevel">
          <option value="">Barcha</option>
          <option value="Junior">Junior</option>
          <option value="Middle">Middle</option>
          <option value="Senior">Senior</option>
          <option value="Lead">Lead</option>
        </select>
      </div>
      <div class="form-group" v-if="technologies.length > 0">
        <label>Texnologiyalar yoki dasturlash tillari</label>
        <div id="languages-and-technologies">
          <div class="custom-control custom-checkbox" v-for="technology in technologies">
            <input type="checkbox" class="custom-control-input" :id="technology" :value="technology" v-model="selectedTechnologies">
            <label class="custom-control-label" :for="technology">
              <span v-if="technology">{{ technology }}</span><span v-else>Koʻrsatilmagan</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="col-8">
    <div id="results">
      <dt>Ishtirokchilar</dt>
      <dd>{{ numberOfParticipants }}</dd>
      <dt>1-kvartil</dt>
      <dd>{{ firstQuartile }}</dd>
      <dt>Mediana</dt>
      <dd>{{ median }}</dd>
      <dt>2-kvartil</dt>
      <dd>{{ thirdQuartile }}</dd>
      <dt>Minimum va maksimum</dt>
      <dd>{{ min }} / {{ max }}</dd>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjs/dist/math.min.js"></script>
<script src="/js/salary-widget.js"></script>
