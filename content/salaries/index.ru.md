---
title: Зарплаты
date: 2020-03-11T16:19:24+05:00
translationKey: "salaries"
---

Зарплаты на основе [опроса](/ru/salary-report/2020-02/) проведеннего в феврале 2020-го года. [Квартиль](https://en.wikipedia.org/wiki/Quartile) и [медиана](<https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_(%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)>) описаны на Википедии.

<div id="app" class="row">
  <div class="col-4">
    <form :disabled="isFormDisabled == true">
      <div class="form-group">
        <label for="position">Должность</label>
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
        <label for="level">Уровень</label>
        <select class="form-control" id="level" :disabled="isLevelDisabled == true || isFormDisabled == true" v-model="selectedLevel">
          <option value="">Все</option>
          <option value="Junior">Junior</option>
          <option value="Middle">Middle</option>
          <option value="Senior">Senior</option>
          <option value="Lead">Lead</option>
        </select>
      </div>
      <div class="form-group" v-if="technologies.length > 0">
        <label>Язык программирования или технологии</label>
        <div id="languages-and-technologies">
          <div class="custom-control custom-checkbox" v-for="technology in technologies">
            <input type="checkbox" class="custom-control-input" :id="technology" :value="technology" v-model="selectedTechnologies">
            <label class="custom-control-label" :for="technology">
              <span v-if="technology">{{ technology }}</span><span v-else>Не указан</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="col-8">
    <div id="results">
      <dt>Количество участников</dt>
      <dd>{{ numberOfParticipants }}</dd>
      <dt>Минимум и максимум</dt>
      <dd>{{ min }} / {{ max }}</dd>
      <dt>1-квартиль</dt>
      <dd>{{ firstQuartile }}</dd>
      <dt>Медиана</dt>
      <dd>{{ median }}</dd>
      <dt>2-квартиль</dt>
      <dd>{{ thirdQuartile }}</dd>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjs/dist/math.min.js"></script>
<script src="/js/salary-widget.js"></script>
