import React, {Component} from 'react';

const ScoreTable = () => {
  return(
    <table class='ui celled collapsing very basic table'>
    <thead class=''>
      <tr class=''>
        <th class=''>Score Class</th>
        <th class="">Range</th>
      </tr>
    </thead>
    <tbody class=''>
      <tr class=''>
        <td class=''>
          <h4 class='ui image header'>
            <div class='content'>1</div>
          </h4>
        </td>
        <td class="">~ 83 </td>
      </tr>
      <tr class="">
        <td class="">
          <h4 class="ui image header">
            <div class="content">2 </div>
          </h4>
        </td>
        <td class=''>84 ~ 87</td>
      </tr>
      <tr class=''>
        <td class=''>
          <h4 class='ui image header'>
            <div class='content'>3</div>
          </h4>
        </td>
        <td class="">88 ~ 91 </td>
      </tr>
      <tr class="">
        <td class="">
          <h4 class="ui image header">
            <div class="content">4 </div>
          </h4>
        </td>
        <td class=''>92 ~ 95</td>
      </tr>
      <tr class=''>
        <td class=''>
          <h4 class='ui image header'>
            <div class='content'>5</div>
          </h4>
        </td>
        <td class="">96 ~ 100</td>
      </tr>
    </tbody>
  </table>
  )
};

export default ScoreTable;