import React from 'react';

function UserInfo({ userData }) {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">Informasi Profil</div>
        <div className="panel-body" id="panel-body">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                className="img img-responsive rounded-circle"
                src={userData.avatar_url}
                height="120"
                width="120"
                alt="avatar"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12" id="short-info">
              <table>
                <thead>
                  <tr>
                    <th style={{ color: 'white' }}>Pengikut&nbsp;</th>
                    <th style={{ color: 'white' }}>Repositori&nbsp;</th>
                    <th style={{ color: 'white' }}>Mengikuti&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'white' }}>{userData.followers}</td>
                    <td style={{ color: 'white' }}>{userData.public_repos}</td>
                    <td style={{ color: 'white' }}>{userData.following}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div id="long-info">
        <table className="table table-reponsive table-striped table-hover">
          <caption>Informasi Pengguna</caption>
          <tbody>
            <tr>
              <td>Nama:</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Lokasi:</td>
              <td>{userData.location}</td>
            </tr>
            <tr>
              <td>Dibuat pada:</td>
              <td>{userData.created_at}</td>
            </tr>
            <tr>
              <td>Repositori Publik:</td>
              <td>{userData.public_repos}</td>
            </tr>
            <tr>
              <td>Gists Publik:</td>
              <td>{userData.public_gists}</td>
            </tr>
            <tr>
              <td>URL Profil:</td>
              <td>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                  {userData.html_url}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInfo;
